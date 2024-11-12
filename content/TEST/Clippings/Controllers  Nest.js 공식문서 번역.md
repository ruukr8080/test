---
title: "Controllers | Nest.js 공식문서 번역"
author:
published: 2022-06-26
created: 2024-11-12
description:
---
![](https://doralife12.gitbook.io/~gitbook/image?url=https%3A%2F%2Fdocs.nestjs.com%2Fassets%2FControllers_1.png&width=768&dpr=4&quality=100&sign=aefc96c4&sv=1)
## 1. 기본적인 @Controller() 라우팅
```
// cats.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```
	 - `$nest g controller cats` : 컨트롤러 생성 
	 - `$nest g resource [name]` : validation 포함된  CRUD 컨트롤러를 생성
	 - ↪ `CRUD generator`


> [!Tip] 핸들러에서 '@Res()'나 '@Next()' 쓸때 주의사항
> 
>예를 들면 쿠키나 헤더만 설정하고 다른 것은 프레임워크에게 맡기고 싶을 때 두 옵션을 모두 써야한다면  '@Res({ passthrough: true })' 처럼 'passthrough'  'true'로 설정해야 됨.
>library-specific 옵션을 선택했다고 감지되기 때문에,  해당 라우트에 대해 Standard 옵션은 자동으로 꺼지며 서버도 죽음.

---

## 2. Request 핸들링
📁@types/express

_위에 request:Request 처럼 'express'의 타입 정보를 가져올 때 씀._
```
// cats.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
// express/request 접근해서 `@Req()`로 request 객체 주입함
```


| 데코레이터                   | Request 객체들( HTTP 요청)           |
| ----------------------- | ------------------------------- |
| @Request(), @Req()      | req                             |
| @Response(), @Res()     | res                             |
| @Next()                 | next                            |
| @Session()              | req.session                     |
| @Param(key?: string)    | req.params / req.params[key]    |
| @Body(key?: string)     | req.body / req.body[key]        |
| @Query(key?: string)    | req.query / req.query[key]      |
| @Headers(name?: string) | req.headers / req.headers[name] |
| @Ip()                   | req.ip                          |
| @HostParam()            | req.hosts                       |

>[!Tip] 주의
>@Res()나 @Response()를 메서드 핸들러에 넣으면 해당 핸들러를 **Library-specific 모드**로 인식됨. 즉, res.json(...)이나 res.send(...) 등의 방법으로 직접 응답 객체를 호출하여 응답을 줘야함.

---

## 3. POST  핸들러
📄기본 데코레이터 :@Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All()
@All()은 모든 메서드에 엔드포인트를 정의해줌
```
// cats.controller.ts
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```






## 4.패턴 기반 라우팅 라우트 와일드카드

📄 `?`  |   `+`  | ` *`  | `( )`
```
@Get('ab*cd') //'abcd', 'ab_cd', 'abecd' 등이 매치됨.
findAll() {
  return 'This route uses a wildcard';
}
```



## 5. 핸들러에 @HttpCode(...)넣어서 상태 코드 조작하기

📁@nestjs/common 의 `HttpCode`
- 스탠다드
```
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
//기본 상태 코드인 (200)을 (204)로 바꿈.
```
- 정적으로 설정값 잡기
```
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
```
- 동적으로 설정값 잡기
```
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
```
> hosts 옵션은 호스트 네임의 특정 위치에 있는 동적 값을 가져오기 위해 토큰을 사용하@HostParam()으로 접근할 수 있다.
## 10. 요청에 대한 스코프 개념
📄Nest는 들어오는 요청들 간의 거의 모든 것이 공유된다 함.

- Nest는 데이터베이스에 대한 연결 풀, 전역 상태의 싱글톤 서비스 등, 여러 공유되는 리소스를 갖고 있음. 
- 왜 이렇게 설계되었는지를 이해하려면, 먼저 Node.js는 각각의 요청을 분리된 쓰레드로 처리하는 무상태 요청/응답 멀티 쓰레드 모델을 따르지 않는다는 것을 알아야 함.❓❓
- Nest는 Node.js 위에서 동작하기 때문에, 싱글톤 인스턴스를 사용하는 것이 우리의 환경에서는 가장 **안전**하다.
- 스코프를 다르게 설정할 수 있음. GraphQL로 각 요청에 캐싱을 하거나, 요청 트래킹, 멀티테넌시(multi-tenancy) 등 요청 기반 수명을 갖는 컨트롤러가 필요하면 스코프를 은닉시키는 설정을 써야댐.

## 11. 모든 비동기 함수는   Promise 를 반환해야함.❓
📁async / await

	만약 개발자가 지연된 값을 반환하면, Nest가 스스로 resolve한다는 것임.
```
// cats.controller.ts
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```
Nest의 라우트 핸들러는 RxJS의 [Observable 스트림](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) 또한 반환할 수 있기 때문에 더욱 강력합니다. 
Nest는 자동으로 스트림을 subscribe 하고, 스트림이 한 번 완료되면 마지막에 발생한 값을 가져옵니다.

```
// cats.controller.ts
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```

위의 두 방법은 모두 잘 작동하며, 필요에 따라 사용하면 됩니다.

### 12. @Body()로 POST 받아보기 

🔴 제대로 이해 못함.
그 전에, 타입스크립트를 사용한다면 먼저 **DTO**(Data Transfer Object) 스키마를 정의해야 합니다. DTO는 네트워크를 통해서 어떻게 데이터가 보내질 것인가를 정의한 객체입니다. DTO 스키마는 **타입스크립트**의 인터페이스나 간단하게 클래스를 사용하여 정의할 수 있습니다. 여기에는 클래스를 쓸 것을 추천드립니다. 그 이유는, 클래스는 자바스크립트 ES6 표준의 한 부분이므로 자바스크립트로 컴파일 될 때, 사라지지 않고 실제 요소로 보존되기 때문입니다. 또, 타입스크립트의 인터페이스는 트랜스파일(transpile) 과정에서 사라지기 때문에, Nest가 런타임에 사용할 수가 없게 됩니다. 이는 **Pipes** 같은 기능에서 런타임에 변수의 메타타입에 접근할 수도 있기 때문에 중요합니다.

자, 이제 `CreateCatDto` 클래스를 만들어봅시다.

```
// create-cat.dto.ts
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
```

위 클래스는 세 가지의 기본적인 속성을 갖고 있습니다. 이제 `CatsController` 안에서 새로 만든 DTO를 아래와 같이 사용할 수 있습니다.

```
// cats.controller.ts
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```

> **팁**
> 
> 메서드 헨들러에 들어오면 안되는 속성들을 `ValidationPipe`를 통해서 걸러낼 수 있습니다. 이 경우, 허용되는 속성을 설정하고(whitelist) 허용되지 않는 속성은 자동적으로 결과 객체에서 뺄 수 있습니다. 위의 `CreateCatDto` 예시의 경우, 우리가 허용한 속성은 `name`, `age`, `breed`가 됩니다. 더 알아보시려면, [여기](https://docs.nestjs.com/techniques/validation#stripping-properties)를 참고하세요.

### 에러 처리

예외를 활용하는 법 등, 에러를 처리하는 방법은 [여기](https://docs.nestjs.com/exception-filters)로 나눠졌습니다.

### 활용 예시

아래는 몇몇 데코레이터를 사용한 기본적인 컨트롤러의 예시입니다. 이 컨트롤러는 내부 데이터에 접근하고, 조작할 수 있는 여러 메서드를 제공합니다.

```
// cats.controller.ts
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return \`This action returns all cats (limit: ${query.limit} items)\`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return \`This action returns a #${id} cat\`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return \`This action updates a #${id} cat\`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return \`This action removes a #${id} cat\`;
  }
}
```

> **팁**
> 
> Nest CLI는 위의 모든 일을 할 필요가 없게 **모든 기반 코드**를 자동으로 생성하여 개발자 경험이 더 간단하게 만드는 생성기를 제공합니다. 이 기능에 대해서 더 알아보고 싶다면, [여기](https://docs.nestjs.com/recipes/crud-generator)를 참고하세요.

### 시작 및 실행

위의 컨트롤러가 모두 정의되어도, Nest는 `CatsController`가 존재한다는 사실을 모르며, 이 때문에 클래스의 인스턴스가 생성되지 않습니다.

컨트롤러는 항상 모듈에 속해아 하므로, `@Module()` 데코레이터 내의 `controllers` 배열에 추가해주어야 합니다. 아직 `AppModule`을 제외하고는 아무 모듈도 정의하지 않았으므로, 이 모듈을 이용해서 Nest에게 `CatsController`를 알려줍시다.

```
// app.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
```

`@Module()` 데코레이터를 달아서, 모듈 클래스에 메타데이터를 설정했습니다. 이제, Nest는 어떤 컨트롤러를 마운트해야 하는지 쉽게 알 수 있습니다.


---




### 특정 라이브러리에 대한 방법

지금까지 Nest가 응답을 다루는 표준 방법에 대해서 이야기 했습니다. 응답을 다루는 두 번째 방법은, library-specific [응답 객체](https://expressjs.com/en/api.html#res)를 사용하는 것입니다. 특정 응답 객체를 가져오기 위해서는, `@Res()` 데코레이터를 사용해야 합니다. 차이점을 보기 위해, 아래와 같이 `CatsController`를 다시 써보았습니다.

```
// cats.controller.ts
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }
}
```

위 방법이 잘 작동하고, 응답 객체에 대한 완전한 조작(헤더, 특정 라이브러리에 대한 기능 등)을 제공하기 때문에 더 유연한 것은 맞지만, 주의를 가지고 사용해야 합니다. 일반적으로, 이 방법은 덜 명확해보이기도 하고 몇몇의 단점도 있습니다. 가장 큰 단점은 코드가 특정 플랫폼에 의존하게 된다는 것과, 테스트하기 힘들어진다는 것(가짜 응답 객체를 만들어야 함), 두 가지를 들 수 있습니다.

또한 위 예시의 경우, 인터셉터나 `@HttpCode()`, `Header()` 데코레이터 등 Nest의 표준 응답 처리 방법에 의존한 Nest의 기능들을 사용할 수 없게 됩니다. 이를 고치려면, 아래와 같이 `passthrough` 옵션을 `true`로 주면 됩니다.

```
@Get()
findAll(@Res({ passthrough: true }) res: Response) {
  res.status(HttpStatus.OK);
  return [];
}
```

이제 어떠한 조건에 따라 쿠키나 헤더를 설정하는 등, 네이티브 객체와 상호작용 가능하면서 동시에 나머지는 프레임워크가 처리할 수 있도록 할 수 있습니다.
