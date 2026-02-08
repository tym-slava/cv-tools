# DateRangePicker

Переиспользуемый компонент для выбора диапазона дат с опцией "Present" (настоящее время).

## Использование

```tsx
import DateRangePicker from "@/common-components/DateRangePicker";

function MyComponent() {
  const [startDate, setStartDate] = useState<DateValue | null>(null);
  const [endDate, setEndDate] = useState<DateValue | null>(null);
  const [isPresent, setIsPresent] = useState(false);

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      isPresent={isPresent}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      onPresentChange={setIsPresent}
      presentLabel="Currently working here"
    />
  );
}
```

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `startDate` | `DateValue \| null` | - | Начальная дата |
| `endDate` | `DateValue \| null` | - | Конечная дата |
| `isPresent` | `boolean` | `false` | Флаг "Настоящее время" |
| `onStartDateChange` | `(value: DateValue \| null) => void` | - | Callback при изменении начальной даты |
| `onEndDateChange` | `(value: DateValue \| null) => void` | - | Callback при изменении конечной даты |
| `onPresentChange` | `(value: boolean) => void` | - | Callback при изменении флага "Present" |
| `startLabel` | `string` | `"Start Date"` | Метка для начальной даты |
| `endLabel` | `string` | `"End Date"` | Метка для конечной даты |
| `presentLabel` | `string` | `"Present (Currently here)"` | Текст чекбокса |
| `showPresent` | `boolean` | `true` | Показывать ли чекбокс "Present" |

## Возможности

- ✅ Автоматическая блокировка End Date при включении "Present"
- ✅ Автоматическая очистка End Date при включении "Present"
- ✅ Кастомизация текстов меток
- ✅ Опциональное отображение чекбокса "Present"

## Примеры использования

### Для Work Experience
```tsx
<DateRangePicker
  startDate={formData.startDate}
  endDate={formData.endDate}
  isPresent={formData.isCurrentlyWorking}
  presentLabel="Currently working here"
  onStartDateChange={(value) => handleDateChange("startDate", value)}
  onEndDateChange={(value) => handleDateChange("endDate", value)}
  onPresentChange={handlePresentChange}
/>
```

### Для Education
```tsx
<DateRangePicker
  startDate={formData.startDate}
  endDate={formData.endDate}
  isPresent={formData.isCurrentlyStudying}
  presentLabel="Currently studying here"
  onStartDateChange={(value) => handleDateChange("startDate", value)}
  onEndDateChange={(value) => handleDateChange("endDate", value)}
  onPresentChange={handlePresentChange}
/>
```

### Без чекбокса "Present"
```tsx
<DateRangePicker
  startDate={startDate}
  endDate={endDate}
  showPresent={false}
  onStartDateChange={setStartDate}
  onEndDateChange={setEndDate}
/>
```
