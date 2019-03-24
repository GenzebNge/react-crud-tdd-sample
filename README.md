# React CRUD TDD Sample

## Instructions

This repo contains an empty react app. Your job is to implement the following user stories in TDD fashion:

1. Given a browser, when I browse to the site, then I see an "Add Person" button.
1. Given I see the "Add Person" button, when I click it, then I am taken to an Add Person page.
1. Given I am on the Add Person page, when I fill in the fields and click "Add", I am taken back to the list page.
1. Given that I have added a person, when I am on the list page, then I see my people.
1. Given that I see people in the list, when I click a person, I am taken to a Person Edit page.
1. Given I am on the person edit page, when I change a persons name and click Save, then I am taken back to the list page.
1. Given that I have made updates to people, when I am on the list page, I should see the modified information.
1. Given that I am on the edit page, then I see a delete button.
1. Given that I am on the edit page, when I click the delete button, then I am taken back to the list page.
1. Given that I have deleted a person, when I am on the list page, then I no longer see the deleted people.

Tips:

- Use [simulate](https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md) to simulate text change and click events
- Use sinon to stub the `onEdit()` call
- Verify the stub was called with the correct arguments.
- Use [controlled components](https://reactjs.org/docs/forms.html) for input.

## Resources

- [Jest assertions](https://facebook.github.io/jest/docs/en/expect.html)
- [Shallow rendering with Enzyme](http://airbnb.io/enzyme/docs/api/shallow.html)
- [Shallow docs on GitHub](https://github.com/airbnb/enzyme/tree/master/docs/api/ShallowWrapper)
- [Shallow find](http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html)
- [Shallow simulate](http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html)
- [Sinon docs](http://sinonjs.org/releases/v4.1.6/)
