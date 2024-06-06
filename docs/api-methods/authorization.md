# Авторизация

## Метод авторизации в системе

::: info
_POST_ `v2/login`

Пример использования:
```copy
https://client.adstat.pro/api/v2/login
```

__Параметры:__

| Параметр      | Тип       | Описание            |
|---------------|-----------|---------------------|
| login         | string    | Логин пользователя |
| password      | string    | Пароль пользователя|

__Пример параметров в тело запроса:__
```json
{
  "login": "user@example.com",
  "password": "string"
}
```
__Пример успешного ответа:__
```json
{
  "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "access_token": "string",
  "refresh_token": "string"
}
```


`<access_token>` необходимо передавать в headers HTTP запросов в формате:
+ `Bearer <access_token>`

`<refresh_token>` необходимо использовать в методе `v2/access_token`, когда истёк срок действия `<access_token>` - для обновления `<access_token>`
:::

## Метод рефреш токена

::: info
_GET_ `v2/access-token`

Пример использования:
```copy
https://client.adstat.pro/api/v2/access-token
```

__Параметры__

В заголовке HTTP запроса необходимо передать `<refresh_token>` в формате:
+ `refresh_token: <refresh_token> `

__Пример успешного ответа:__

```json
{
  "access_token": "string",
  "token_type": "Bearer"
}
```
:::
