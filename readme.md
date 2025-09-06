# 🧪 Software Testing Concepts (Explained Simply)

## 🔹 Core Concepts

-   **SUT (System Under Test)** → The piece of software you are testing.
    (Like the main actor in your test movie.)
-   **Validation** ("Are we building the system correctly?") → Checks if
    the system works as intended, technically correct.
-   **Verification** ("Are we building the system we need?") → Checks if
    the system solves the real problem for the user.

------------------------------------------------------------------------

## 🔹 Test Methodologies

-   **TDD (Test Driven Development)** → Write tests **before** writing
    the code. Helps guide design and avoid bugs.
-   **BDD (Behavior Driven Development)** → Write tests in a way that
    describes **behavior** in natural language (close to how users
    think).
-   **AAA (Arrange, Act, Assert)** → A common test structure:
    -   Arrange = prepare the scenario
    -   Act = do the action
    -   Assert = check the result

------------------------------------------------------------------------

## 🔹 Test Results

-   **False Positive** → Test says "everything is fine" when it's
    **not** fine. (Bad, dangerous.)
-   **False Negative** → Test says "something is wrong" when it's
    actually **fine**. (Annoying, wastes time.)
-   **Coverage** → How much of your code is touched by tests (e.g., 80%
    coverage = 80% of lines executed in tests).

------------------------------------------------------------------------

## 🔹 Test Doubles (fakes used in tests instead of real things)

-   **Dummy** → Fake data used just to fill information (not actually
    used).
-   **Fake** → A lightweight implementation of something, good enough
    for testing (like a fake user or fake database).
-   **Stub** → Fake object that returns pre-defined data (like a canned
    API response).
-   **Spy** → Records how a dependency was used (e.g., "function X was
    called 2 times").
-   **Mock** → Like a stub + spy combined: pre-programmed with expected
    responses and also records usage.

------------------------------------------------------------------------

## 🔹 Types of Tests

-   **Unit Tests** → Test small pieces (a function, a class, a method).
    They are **isolated** (don't touch database, network, etc.).
-   **Integration Tests** → Test multiple pieces working together (e.g.,
    function + database).
-   **Functional Tests** → Test **user flows** (e.g., "login → add to
    cart → checkout").
-   **E2E (End-to-End) Tests** → Test like a real user: from start to
    finish, simulating clicks, typing, etc.

------------------------------------------------------------------------

## 🔹 Extra Notes

-   **What is a Unit?** → The smallest testable part of your code (like
    one Lego block).
-   **Test Double** → Generic term for mocks, spies, stubs, fakes,
    dummies.

## Example command

`npm test -- --coverage`
