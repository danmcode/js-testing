# 🧪 Software Testing Concepts (Explained Simply)

## 🔹 Core Concepts

- **SUT (System Under Test)** → The piece of software you are testing. (Like the main actor in your test movie.)
- **Validar** ("Are we building the system correctly?") → Checks if the system works as intended, technically correct.
- **Verificar** ("Are we building the system we need?") → Checks if the system solves the real problem for the user.

---

## 🔹 Test Methodologies

- **TDD (Test Driven Development)** → Write tests **before** writing the code. Helps guide design and avoid bugs.
- **BDD (Behavior Driven Development)** → Write tests in a way that describes **behavior** in natural language (close to how users think).
- **AAA (Arrange, Act, Assert)** → A common test structure:
  - Arrange = prepare the scenario
  - Act = do the action
  - Assert = check the result

---

## 🔹 Test Results

- **False Positive** → Test says "everything is fine" when it’s **not** fine. (Bad, dangerous.)
- **False Negative** → Test says "something is wrong" when it’s actually **fine**. (Annoying, wastes time.)
- **Coverage** → How much of your code is touched by tests (e.g., 80% coverage = 80% of lines executed in tests).

---

## 🔹 Test Doubles (fakes used in tests instead of real things)

- **Mock** → Fake object that pretends to be a dependency, and you can check how it was used.
- **Spy** → Similar to a mock, but more passive: just records what happened (e.g., “function X was called 2 times”).
- **Stub** → Fake object that returns pre-defined data (like a canned response).

---

## 🔹 Types of Tests

- **Unit Tests** → Test small pieces (a function, a class, a method). They are **isolated** (don’t touch database, network, etc.).
- **Integration Tests** → Test multiple pieces working together (e.g., function + database).
- **Functional Tests** → Test **user flows** (e.g., “login → add to cart → checkout”).
- **E2E (End-to-End) Tests** → Test like a real user: from start to finish, simulating clicks, typing, etc.

---

## 🔹 Extra Notes

- **What is a Unit?** → The smallest testable part of your code (like one Lego block).
- **Test Double** → Generic term for mocks, spies, stubs.

## commands

`npm test -- --coverage`
