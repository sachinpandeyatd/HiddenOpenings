import logging
from config import SCRAPERS
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def run_scrapers():
    logging.info("--- Starting main scraper runner ---")
    
    for scraper_config in SCRAPERS:
        ScraperClass = scraper_config['class']
        company_name = scraper_config['company_name']
        url = scraper_config['url']
        
        try:
            scraper_instance = ScraperClass(company_name=company_name, url=url)
            scraper_instance.scrape()
        except Exception as e:
            logging.error(f"Failed to run scraper for {company_name}. Error: {e}", exc_info=True)
            
    logging.info("--- Main scraper runner finished ---")

if __name__ == "__main__":
    run_scrapers()