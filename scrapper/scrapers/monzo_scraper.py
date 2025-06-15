import logging
import requests
from bs4 import BeautifulSoup
from sqlalchemy import text

from scrapers.base import BaseScraper
from database import Session

class MonzoScraper(BaseScraper):
    def scrape(self):
        logging.info(f"Scraping {self.company_name}")
        session = Session()
        try:
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            response = requests.get(self.url, headers=headers, timeout=15)
            response.raise_for_status()

            soup = BeautifulSoup(response.content, 'html.parser')
            job_elements = soup.select("tr.job-post")
            
            logging.info(f"Found {len(job_elements)} jobs at {self.company_name}")

            for job_element in job_elements:
                title_element = job_element.select_one("p.body--medium")
                location_element = job_element.select_one("p.body__secondary")
                link_element = job_element.select_one("a")

                title = title_element.get_text(strip=True) if title_element else "N/A"
                location = location_element.get_text(strip=True) if location_element else "N/A"
                apply_link = link_element['href'] if link_element else "#"

                if title == "N/A" or apply_link == "#":
                    continue

                stmt = text("SELECT EXISTS(SELECT 1 FROM jobs WHERE apply_link = :apply_link)")
                job_exists = session.execute(stmt, {'apply_link': apply_link}).scalar_one()

                if not job_exists:
                    insert_stmt = text("""
                        INSERT INTO jobs (title, company, location, apply_link, posted_date, type)
                        VALUES (:title, :company, :location, :apply_link, :posted_date, :type)
                    """)
                    session.execute(insert_stmt, {
                        'title': title, 'company': self.company_name, 'location': location,
                        'apply_link': apply_link, 'posted_date': 'N/A', 'type': 'Full-time'
                    })
                    logging.info(f"Saved new job: {title}")
            
            session.commit()

        except Exception as e:
            logging.error(f"Error scraping {self.company_name}: {e}", exc_info=True)
            session.rollback()
        finally:
            session.close()