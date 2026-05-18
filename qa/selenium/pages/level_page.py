from selenium.webdriver.common.by import By


class LevelPage:

    def __init__(self, driver):
        self.driver = driver

    level_screen = (By.CSS_SELECTOR, '[data-testid="level-screen"]')
    back_button = (By.CSS_SELECTOR, '[data-testid="back-button"]')

    def level(self, n):
        return (By.CSS_SELECTOR, f'[data-testid="level-level-{n}"]')
