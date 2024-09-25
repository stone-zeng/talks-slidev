---
fonts:
  sans: "Inter, Inter Variable Text, Source Han Sans SC, Source Han Sans SC VF"
  mono: "Cascadia Code, Source Han Sans SC, Source Han Sans SC VF"
  provider: none
  fallbacks: false
---

# Mypy 简介

Optional static typing for Python

<div class="mt-12">
  曾祥东
  <br>
  2024 年 9 月 12 日
</div>

---

## Python 类型标注 (1)

- 原子类型：`int`、`float`、`bool`、`str`、`bytes`
  - 常量（初始化后禁止修改）：`Final`
- 容器类型：`list[int]`、`tuple[int, str, float]`、`dict[str, float]`、`set[int]`
  - Python 3.8 及之前版本：`from typing import List, Tuple, Dict, Set`

<v-click>

- 联合类型：
  - `int | str = Union[int, float]`
  - `str | None = Optional[str]`
  - 需要 `from typing import Union, Optional`

</v-click>

<v-click>

- 任意类型
  - `Any`：局部关闭类型检查
  - `object`：静态类型，所有对象的基类，并不能支持所有操作

</v-click>

---

## Python 类型标注 (2)

- 函数与 lambda

  ```py
  from typing import Callable

  def twice(i: int, next: Callable[[int], int]) -> int:
      return next(next(i))

  def add(i: int) -> int:
      return i + 1

  minus: Callable[[int], int] = lambda i: i - 1

  print(twice(3, add), twice(3, minus))  # 5 1
  ```

<v-click>

- 生成器（提供 `iter()` 和 `next()` 接口）

  ```py
  def squares(n: int) -> Iterator[int]:
      for i in range(n):
          yield i * i
  ```

</v-click>

---
layout: two-cols
layoutClass: gap-16
---

## Python 类型标注 (3)

```py
from dataclasses import dataclass
from enum import Enum
from typing import NamedTuple, TypedDict

class Gender(Enum):
    MALE = "male"
    FEMALE = "female"

@dataclass
class User1:
    name: str
    gender: Gender

class User2(NamedTuple):
    name: str
    gender: Gender

class User3(TypedDict):
    name: str
    gender: Gender
```

::right::

<div v-click class="flex items-center h-full">

| 类型         | 修改值 | 添加属性 | 基类    |
|:------------:|:------:|:--------:|:-------:|
| `dataclass`  | ✔️     | ✔️       | -       |
| `NamedTuple` | ✔️     | ❌       | `tuple` |
| `TypedDict`  | ❌     | ❌       | `dict`  |

</div>

---

## Python 类型理论

- 子类型多态
  - 名义子类型（nominal subtyping）：来自继承
  - 结构子类型（structural subtyping）：具有兼容的属性和方法
    ```py
    class Sized:
      def __len__(self) -> int: ...
    class Iterator:
      def __next__(self) -> T: ...
      def __iter__(self) -> Iterator[T]: ...
    ```
  - 鸭子类型（duck typing）：动态的结构子类型
    - `int` < `float`

<v-click>

- 参数多态
  - 协变（covariant）：`Sequence[Dog] < Sequence[Animal]`
  - 逆变（contravariant）：`Callable[[Animal], int] < Callable[[Dog], int]`
  - 不变（invariant）：`List[Dog] ≮ List[Animal] && List[Animal] ≮ List[Dog]`

</v-click>

---

## Mypy 内部实现

- 运行流程
  - 模块依赖分析 → SCC (strongly connected component)
  - Python 语法分析 → AST
  - 语义分析 → 名称绑定、符号表
  - 类型检查 → `dict[Node, Type]`

<v-click>

- Typeshed：`*.pyi` 文件，标准库及第三方库的类型信息

</v-click>

<v-click>

- Mypyc
  - 生成 native C 代码
  - 流程：AST → [语法、类型检查] → IR → [插入异常、引用计数] → C code → 机器码
  ```py
  def f(x):
      x, r0 :: int
  L0:
      r0 = CPyTagged_Add(x, 2)
      return r0
  ```

</v-click>

---

## 相关工具

|      | Mypy   | Pyright    | Pyre  | Pytype |
|:----:|:------:|:----------:|:-----:|:------:|
| 作者 | Python | Microsoft  | Meta  | Google |
| 语言 | Python | TypeScript | OCaml | Python |
| 性能 | 🚗 | 🚀 | ✈️ | 🚶 |

## 参考

- Typing PEPs: <https://peps.python.org/topic/typing>
  - PEP 483 - The Theory of Type Hints
  - PEP 484 - Type Hints
