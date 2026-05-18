from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

from pages.home_page import HomePage
from pages.component_page import ComponentPage
from pages.level_page import LevelPage
from pages.activity_page import ActivityPage


class TestActivity:

    def _navigate_to_activity(self, driver):
        wait = WebDriverWait(driver, 10)
        driver.find_element(*HomePage.start_button).click()
        wait.until(EC.visibility_of_element_located(ComponentPage.component_screen))
        driver.find_element(*ComponentPage.components["fonologico"]).click()
        wait.until(EC.visibility_of_element_located(LevelPage.level_screen))
        driver.find_element(*LevelPage(driver).level(1)).click()
        wait.until(EC.visibility_of_element_located(ActivityPage.activity_screen))

    def test_activity_elements_visible(self, logged_in_driver):
        self._navigate_to_activity(logged_in_driver)
        activity = ActivityPage(logged_in_driver)

        assert logged_in_driver.find_element(*activity.activity_title).is_displayed()
        assert logged_in_driver.find_element(*activity.timer_bar).is_displayed()
        assert logged_in_driver.find_element(*activity.instruction_text).is_displayed()
        assert logged_in_driver.find_element(*activity.prompt_text).is_displayed()
        assert logged_in_driver.find_element(*activity.submit_button).is_displayed()

    def test_correct_answer_shows_celebration(self, logged_in_driver):
        self._navigate_to_activity(logged_in_driver)
        activity = ActivityPage(logged_in_driver)

        logged_in_driver.find_element(
            *activity.choice_option("Mano")
        ).click()
        logged_in_driver.find_element(*activity.submit_button).click()

        wait = WebDriverWait(logged_in_driver, 10)
        celebration = wait.until(
            EC.visibility_of_element_located(activity.celebration_overlay)
        )
        assert celebration.is_displayed()
        assert logged_in_driver.find_element(*activity.reward_text).is_displayed()

    def test_incorrect_answer_shows_retry(self, logged_in_driver):
        self._navigate_to_activity(logged_in_driver)
        activity = ActivityPage(logged_in_driver)

        logged_in_driver.find_element(
            *activity.choice_option("Sol")
        ).click()
        logged_in_driver.find_element(*activity.submit_button).click()

        wait = WebDriverWait(logged_in_driver, 10)
        result = wait.until(EC.visibility_of_element_located(activity.result_card))
        assert result.is_displayed()
        result_title = logged_in_driver.find_element(*activity.result_title).text
        assert "Intenta" in result_title

    def test_timer_is_visible(self, logged_in_driver):
        self._navigate_to_activity(logged_in_driver)
        activity = ActivityPage(logged_in_driver)

        timer = logged_in_driver.find_element(*activity.timer_bar)
        assert timer.is_displayed(), "Timer bar no visible"
