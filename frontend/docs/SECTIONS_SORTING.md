# Сортировка секций в CV Builder

## Обзор

Реализована функциональность изменения порядка секций в CV Builder с помощью drag & drop. Порядок секций сохраняется и применяется как в редакторе (аккордеоны), так и в превью резюме (всех шаблонах).

## Файлы изменены

### 1. Store (`/store/useCvBuilderStore.ts`)

Добавлено:
- `sectionsOrder: string[]` - массив ID секций в порядке пользователя
- `setSectionsOrder: (order: string[]) => void` - метод обновления порядка

Значение по умолчанию:
```typescript
sectionsOrder: [
  "personal-information",
  "professional-summary",
  "prof_experience",
  "education",
  "skills",
  "languages",
]
```

### 2. SectionsList (`/app/cv-builder/SectionsList/index.tsx`)

**Добавлен drag & drop:**
- Используется `dnd-kit` для перетаскивания аккордеонов
- `SortableAccordionItem` - обертка для каждого аккордеона
- Иконка `GripVertical` для визуального индикатора перетаскивания
- Состояние `sectionsOrder` синхронизируется с store

**Ключевые особенности:**
- Секции сортируются согласно `sectionsOrder`
- При перетаскивании обновляется `sectionsOrder` в store
- Активация перетаскивания требует сдвига на 8px (предотвращает случайное срабатывание)

### 3. Утилита (`/utils/getSortedSections.ts`)

Создана универсальная функция `getSortedSections(cvData)`:
- Принимает данные CV из store
- Возвращает массив секций, отсортированных согласно `sectionsOrder`
- Включает данные каждой секции и условие рендеринга

### 4. Шаблоны

Обновлены все 3 шаблона:
- **Modern** (`/templates/modern/index.tsx`)
- **Standard** (`/templates/standart/index.tsx`)
- **Elegant** (`/templates/elegant/index.tsx`)

**Изменения:**
- Импорт `getSortedSections`
- Рефакторинг рендера секций через `renderSection(sectionId)` switch-case
- Секции рендерятся в порядке из `sortedSections`
- Personal Information остается всегда первой (в header)

## Использование

### Изменение порядка секций

1. Пользователь открывает CV Builder
2. Наводит курсор на иконку захвата (⋮⋮) слева от названия секции
3. Зажимает и перетаскивает секцию вверх или вниз
4. Отпускает - новый порядок сохраняется

### Отображение в превью

Порядок секций в превью автоматически синхронизируется с порядком в редакторе:
- Изменили порядок в аккордеонах → порядок обновился в превью
- Работает для всех шаблонов одинаково

## Технические детали

### Структура данных

```typescript
// Store
interface CvBuilderState {
  sectionsOrder: string[]; // ["personal-information", "prof_experience", ...]
  setSectionsOrder: (order: string[]) => void;
}

// Утилита
interface SectionData {
  id: string;
  title: string;
  data: any;
  renderCondition: boolean;
}
```

### Пример использования в шаблоне

```typescript
import { getSortedSections } from "@/utils/getSortedSections";

const MyTemplate = ({ data }) => {
  const sortedSections = getSortedSections(data);

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "professional-summary":
        return <section>...</section>;
      case "prof_experience":
        return <section>...</section>;
      // ... остальные секции
    }
  };

  return (
    <div>
      <header>...</header> {/* Personal Information */}
      {sortedSections
        .filter((s) => s.id !== "personal-information")
        .map((s) => renderSection(s.id))}
    </div>
  );
};
```

## Персистентность

Порядок секций автоматически сохраняется благодаря `zustand/persist`:
- Изменения сохраняются в localStorage
- При перезагрузке страницы порядок восстанавливается

## Доступность

- Drag handle реализован как `<button>` для доступности с клавиатуры
- Добавлен `aria-label` для screen readers
- Поддержка навигации с клавиатуры через `KeyboardSensor`

## Будущие улучшения

- Добавить кнопку "Reset order" для восстановления порядка по умолчанию
- Визуальная индикация активной зоны drop при перетаскивании
- Анимация плавного перехода секций
