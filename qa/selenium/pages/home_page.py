from selenium.webdriver.common.by import By

class HomePage:

    def __init__(self, driver):
        self.driver = driver

    search_box = (By.ID, "search_product")

    search_button = (By.ID, "submit_search")

    def search_product(self, product):

        self.driver.find_element(
            *self.search_box
        ).send_keys(product)

        self.driver.find_element(
            *self.search_button
        ).click()
