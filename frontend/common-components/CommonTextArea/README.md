# CommonTextArea

Rich text editor компонент на основе Quill 2.0.3.

## Использование

```tsx
import CommonTextArea from "@/common-components/CommonTextArea";

function MyComponent() {
  const [content, setContent] = useState("");

  return (
    <CommonTextArea
      labelText="Описание"
      tooltipContent="Введите ваше описание"
      initialValue={content}
      onChange={setContent}
      placeholder="Начните вводить текст..."
    />
  );
}
```

## Props

- `labelText?: string` - Текст метки над редактором
- `tooltipContent?: string` - Текст подсказки в тултипе
- `initialValue?: string` - Начальное значение (HTML)
- `onChange?: (value: string) => void` - Callback при изменении контента
- `placeholder?: string` - Плейсхолдер редактора

## Возможности

- **Заголовки**: H2, H3
- **Форматирование**: Жирный, курсив, подчеркивание, зачеркнутый
- **Списки**: Нумерованные и маркированные
- **Очистка форматирования**

## Технические детали

- Использует Quill 2.0.3
- Полностью совместим с React 18 и Next.js 15
- Поддержка SSR через динамический импорт
- Автоматическая очистка при размонтировании
