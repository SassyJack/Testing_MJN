from selenium.webdriver.common.by import By


class ActivityPage:

    def __init__(self, driver):
        self.driver = driver

    activity_screen = (By.CSS_SELECTOR, '[data-testid="activity-screen"]')
    activity_title = (By.CSS_SELECTOR, '[data-testid="activity-title"]')
    timer_bar = (By.CSS_SELECTOR, '[data-testid="timer-bar"]')
    instruction_text = (By.CSS_SELECTOR, '[data-testid="instruction-text"]')
    prompt_text = (By.CSS_SELECTOR, '[data-testid="prompt-text"]')
    submit_button = (By.CSS_SELECTOR, '[data-testid="submit-button"]')
    result_card = (By.CSS_SELECTOR, '[data-testid="result-card"]')
    result_title = (By.CSS_SELECTOR, '[data-testid="result-title"]')
    celebration_overlay = (By.CSS_SELECTOR, '[data-testid="celebration-overlay"]')
    reward_text = (By.CSS_SELECTOR, '[data-testid="reward-text"]')
    continue_button = (By.CSS_SELECTOR, '[data-testid="continue-button"]')
    exit_button = (By.CSS_SELECTOR, '[data-testid="exit-button"]')

    def choice_option(self, value):
        return (By.CSS_SELECTOR, f'[data-testid="choice-option-{value}"]')
