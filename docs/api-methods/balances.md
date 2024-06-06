# Работа с кабинетами

## Метод получение общих балансов
:::info
_GET_ `dashboard/balances`

Пример использования:
```copy
https://client.adstat.pro/api/dashboard/balances
```

__Параметры:__

В заголовках HTTP запроса необходимо передать `<access_token>` в формате:
+ `Authorization: "Bearer <access_token>" `


__Пример успешного ответа:__
```json
{
  "active": {
    "amount": 0,
    "currency": "string"
  },
  "available": {
    "amount": 0,
    "currency": "string"
  },
  "total": {
    "amount": 0,
    "currency": "string"
  }
}
```

__Описание параметров успешного ответа:__

| Параметр                | Описание                               |
|-------------------------|----------------------------------------|
| success_response.active | Баланс остатка средств в объявлениях   |
| success_response.available      | Свободный баланс кабинета пользователя |
| success_response.total          | Общий баланс кабинета пользователя     |
:::

## Метод получения кабинетов
:::info
_GET_ `accounts/telegram/names`

Пример использования:
```copy
https://client.adstat.pro/api/accounts/telegram/names
```

__Параметры:__

В заголовках HTTP запроса необходимо передать `<access_token>` в формате:
+ `Authorization: "Bearer <access_token>" `

__Пример успешного ответа:__
```json
[
  {
    "account_uid": "string",
    "name": "string",
    "balance": 0,
    "mode": "string",
    "is_audience_allowed": false
  }
]
```

__Описание параметров успешного ответа:__

| Параметр| Описание|
|---------|----------|
| account_uid | Идентификатор кабинета|
| name| Наименование кабинета |
| balance| Баланс кабинета |
| mode| Внутренний параметр для технических нужд|
| is_audience_allowed| Внутренний параметр для технических нужд |
:::




## Метод получения информации по отдельному кабинету
:::info
_GET_ `api/accounts/telegram/{account_uid}`

Пример использования:
```copy
https://client.adstat.pro/api/accounts/telegram/ACC0000
```

__Параметры:__

В заголовках HTTP запроса необходимо передать `<access_token>` в формате:
+ `Authorization: "Bearer <access_token>" `

В URL метода необходимо передать _Идентификатор кабинета_ - `account_uid`, который можно узнать из [списка всех кабинетов](#метод-получения-кабинетов)

__Пример успешного ответа:__
```json
  {
    "account_uid": "string",
    "name": "string",
    "balance": 0,
    "mode": "string",
    "is_audience_allowed": false
  }
```

__Описание параметров успешного ответа:__

| Параметр| Описание|
|---------|----------|
| account_uid | Идентификатор кабинета|
| name| Наименование кабинета |
| balance| Баланс кабинета |
| mode| Внутренний параметр для технических нужд|
| is_audience_allowed| Внутренний параметр для технических нужд |
:::



