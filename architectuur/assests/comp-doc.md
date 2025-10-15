#  Web Components Documentatie

##  Component: `label-form`

### **Attributes**
- `open`: `Boolean`  
- `label`: `Object`

### **API**

**REST API:**  
```
/labels
```

- **POST**  
```json
{
  "label": "STRING",
  "nest": {
    "label": "STRING"
  }
}
```

- **GET**  
```
/labels/${this.label.id}
```

### **Events**
- `@input-onchange`  
- `@action-click`


---

##  Component: `custom-input`

### **Attributes**
- `labelTitel`: `String`  
- `type`: `"text" | "number" | ...`  
- `placeholder`: `String`  
- `required`: `Boolean`  
- `value`: `String`

### **API**
*(Geen directe API-calls)*

### **Events**
- `dispatch-events: 'input-onchange'`  
  **details:**  
  ```json
  {
    "value": "String" // Alleen indien 'value' niet als attribute is meegegeven
  }
  ```

---

##  Component: `action-button`  *(Gebruik geen callbacks in events)*

### **Attributes**
- `text`: `String`  
- `actionType`: `"primary" | "secondary"`  
- `disabled`: `Boolean`

### **API**
*(Geen directe API-calls)*

### **Events**
- `dispatch-events: 'action-click'`  
  **details:** — *(geen extra details)*

---
