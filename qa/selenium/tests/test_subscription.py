from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestSubscription:

    def test_subscription_screen_is_accessible(self, logged_in_driver):
        driver = logged_in_driver
        wait = WebDriverWait(driver, 10)

        driver.find_element(By.CSS_SELECTOR, '[data-testid="premium-button"]').click()

        screen = wait.until(
            EC.visibility_of_element_located(
                (By.CSS_SELECTOR, '[data-testid="subscription-screen"]')
            )
        )
        assert screen.is_displayed()
        assert "Premium" in screen.text
