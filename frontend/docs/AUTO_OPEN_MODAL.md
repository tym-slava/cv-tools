# Auto-open Modal Feature

## Функционал

При нажатии на кнопку "Add new..." модальное окно автоматически открывается для немедленного редактирования.

## Реализация

### 1. Store (useCvBuilderStore.ts)

Добавлен флаг `isNew` к типам:
- `ProfessionalSummary`
- `ProfExperience`
- `Education`

При создании нового элемента через `add*` методы, флаг `isNew: true` устанавливается автоматически.

### 2. CommonInfoModalItem

Поддержка внешнего управления модалкой через props:
- `isOpen?: boolean` - внешнее состояние открытия
- `onOpenChange?: (isOpen: boolean) => void` - callback для управления состоянием

Если props не переданы, компонент использует внутреннее управление через `useDisclosure`.

### 3. Компоненты форм

**ProfessionalSummary, ProfExperienceItemForm, EducationItemForm:**

```typescript
const [isModalOpen, setIsModalOpen] = useState(false);

// Автоматически открываем модалку для новых элементов
useEffect(() => {
  if (item.isNew) {
    setIsModalOpen(true);
    // Убираем флаг isNew после открытия
    updateItem(id, { isNew: false });
  }
}, [item.isNew, id, updateItem]);
```

## Использование

Пользователь нажимает "Add new summary/experience/education" → модалка открывается автоматически → после первого редактирования флаг `isNew` удаляется.

При клике на заголовок существующего элемента модалка тоже открывается (старое поведение сохранено).
