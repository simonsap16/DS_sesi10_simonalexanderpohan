@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Simon is on the login page

  @positive
  Scenario: As a standart_user, i want to login successfully
    When Simon login with "standart_user" credential
    Then Simon should see home page

  @negative
  Scenario: As a locked_out_user, i want to login successfully
    When Simon login with "locked_out_user" credential 
    Then Simon should see error "Epic sadface: Sorry, this user has been locked out."