# TemplateSelector

Self-contained select component for choosing CV templates using HeroUI.

## Features

✅ **Full store integration** - automatically syncs with `useCvBuilderStore`
✅ **HeroUI Select** - uses the native [HeroUI Select component](https://www.heroui.com/docs/components/select)
✅ **Accessibility** - full keyboard navigation and ARIA attributes support
✅ **Clean UI** - bordered variant with icon, label, and description
✅ **Responsive** - works correctly on all screen sizes

## Usage

```tsx
import TemplateSelector from "@/common-components/TemplateSelector";

export default function YourComponent() {
  return (
    <div>
      <h2>Select CV Template</h2>
      <TemplateSelector />
    </div>
  );
}
```

## How it works

The component automatically:
- Gets the currently selected template from the store
- Displays a list of available templates
- Updates the store when a new template is selected
- Syncs with other components using the same store

## Keyboard Navigation

Powered by HeroUI Select:
- **Space/Enter** - Open select menu
- **ArrowDown/ArrowUp** - Navigate between options
- **Escape** - Close select menu
- **Home/End** - Jump to first/last option
- **Type ahead** - Type to jump to matching options

## Додавання нових шаблонів

Щоб додати новий шаблон, просто оновіть масив `templateOptions` у файлі `TemplateSelector.tsx`:

```tsx
const templateOptions: TemplateOption[] = [
  {
    id: "elegant",
    name: "Елегант",
    description: "Світлий хедер та класична типографіка",
  },
  {
    id: "modern",
    name: "Модерн",
    description: "Сучасний дизайн з чистими лініями",
  },
  {
    id: "standart",
    name: "Стандарт",
    description: "Класичний професійний стиль",
  },
  // Додайте новий шаблон тут
  {
    id: "minimal",
    name: "Мінімал",
    description: "Мінімалістичний стиль",
  },
];
```

## Dependencies

- `@heroui/react` - UI components library (Select, SelectItem)
- `zustand` - for state management
- `lucide-react` - for icons (Layout)
- `@/store/useCvBuilderStore` - application store
- `@/templates` - CV templates

