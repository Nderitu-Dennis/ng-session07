# Two-way binding
- Means - The view updates the component, and the component updates the view, automatically.
- Property binding (downward) + Event binding (upward)

# Syntax
- The syntax for two-way binding is a combination of square brackets and parentheses, [()]. It combines the syntax from property binding, [], and the syntax from event binding, (). The Angular community informally refers to this syntax as "banana-in-a-box".

# Two-way binding with form controls
- Developers commonly use two-way binding to keep component data in sync with a form control as a user interacts with the control. For example, when a user fills out a text input, it should update the state in the component.

- To use **two-way binding with native form controls**, you need to:

1. Import the `FormsModule` from `@angular/forms`

```typescript
import { FormsModule } from '@angular/forms';
```
2. Use the `ngModel` directive with the two-way binding syntax (e.g., [(ngModel)])

3. Assign it the state that you want it to update (e.g., firstName)
```html
<input [(ngModel)]="employeeObj.email" type="email" />
<input type="text" [(ngModel)]="firstName" />
```      

# Forms in Angular
- 2 types of forms: 
    1. Template driven forms
    2. Reactive forms

# Template Driven Forms

- In your main application module `app.module.ts` or a relevant feature module), import `FormsModule` from `@angular/forms` and add it to the imports array. 

```typescript
import { FormsModule } from '@angular/forms';
```
- After importing `FormsModule`, you can build your form directly within your HTML template using directives like `ngForm` for the form element, `ngModel` for form controls, and `ngSubmit` to handle submission.
- `ngModel` facilitates **two-way data binding** and requires a `name`attribute. The component's TypeScript file then defines properties for data binding and includes the form submission logic.

## Edit()
1. First load the data so that form is populated with the employee's current details

2. The app need to know whether to add a new employee or replace an exixting one