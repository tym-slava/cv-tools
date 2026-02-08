# Hooks

## usePdfExport

Хук для експорту HTML елементів в PDF формат використовуючи html2pdf.js.

### Використання

```typescript
import { usePdfExport } from "@/hooks/usePdfExport";

const { exportToPdf, isExporting } = usePdfExport({
  format: "a4",
  margin: 0,
  scale: 2,
});

// Експорт елемента
await exportToPdf("element-id", "filename.pdf");
```

### Параметри

- `format`: Формат сторінки ("a4" або "letter")
- `margin`: Відступи (число або масив [top, right, bottom, left])
- `scale`: Якість рендерингу (1-3, більше = краща якість)

### Повертає

- `exportToPdf(elementId, filename)`: Функція для експорту
- `isExporting`: Стан завантаження

