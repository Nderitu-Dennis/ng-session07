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

