from scrapers.monzo_scraper import MonzoScraper

SCRAPERS = [
    {
        'class': MonzoScraper,
        'company_name': 'Monzo',
        'url': 'https://boards.greenhouse.io/monzo'
    },
]