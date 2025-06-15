from abc import ABC, abstractmethod

class BaseScraper(ABC):
    def __init__(self, company_name: str, url: str):
        self.company_name = company_name
        self.url = url

    @abstractmethod
    def scrape(self):
        pass