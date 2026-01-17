---
fonts:
  sans: "Inter, Inter Variable Text, Source Han Sans SC, Source Han Sans SC VF"
  provider: none
  fallbacks: false
---

# 第三届量子软件论坛回顾

<div class="mt-12">
  北京
  <br>
  2025 年 11 月 7&ndash;8 日
  <br>
  <br>
  曾祥东，桂佳成
</div>

---

<div class="flex gap-16 justify-center">
  <img alt="agenda-1107" src="./images/agenda-1107.png" class="w-56" />
  <img alt="agenda-1108" src="./images/agenda-1108.png" class="w-56" />
</div>

---

## 量子计算与量子人工智能前沿进展

邓东灵

<div class="flex gap-8 text-sm">
<div class="flex-1">

- 量子计算与量子模拟：
  - Break even：逻辑比特错误率小于物理比特
  - 金刚石色心光子（传输）、电子（计算）、核自旋（存储）的三体纠缠，重复码纠错
  - LDPC，bivariate bicycle code，编码率比表面码低，但需要长程关联
  - 有限温度下的拓扑零模（边缘态）

</div>
<div class="flex-1">

- 量子人工智能
  - Curse of dimensionality (AI) vs exponential wall (quantum)
  - AI 高度依赖线性代数（矩阵），这个量子力学也是一致的
  - AI for science
    - Anyons go universal
    - AI 辅助 Levin–Wen 模型（Fibonacci 任意子）的基态制备
  - Quantum enhanced AI
    - Quantum 生成模型
    - 更安全、更节能
  - 挑战：
    - 数据加载
    - 如何 scale（没有经典的 BP 算法）、Barren plateau 问题

</div>
</div>

---
layout: image
image: ./images/zxd/IMG_20251107_091705.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_092914.jpg
backgroundSize: contain
---

---

## 利用神经网络求解 Hubbard 模型

吕定顺

- 量子化学框架：
  - 电子—电子、电子—核相互作用
  - Born–Oppenheimer 近似：electronics structure ⊕ nuclear dynamics
- ByteQC：GPU 加速的量子化学软件包
- FEMION：处理无能隙系统
- 高温超导的第一性原理模拟
  - Hubbard 模型
  - 神经网络作为 ansatz

---
layout: image
image: ./images/zxd/IMG_20251107_103326.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_100307.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_100859.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_100932.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_101534.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_102151.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_103052.jpg
backgroundSize: contain
---

---

## AI 驱动的大规模量子计算与纠错

钟翰森

- 解码器
  - Google 神经网络解码
  - 张潘团队，基于大语言模型
  - GraphQEC
- 中性原子
  - 原子重排
    - AOD：不适用大规模应用
    - SLM：原子损失严重、计算速度慢
    - AI 实现路径匹配（匈牙利算法）

---
layout: image
image: ./images/zxd/IMG_20251107_110714.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_110859.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_111244.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_112313.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_112546.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_112909.jpg
backgroundSize: contain
---

---

## 量子神经网络设计和应用

王鑫

- Barren plateau 问题：梯度会指数下降，但量子优化有精度限制
- 动态李代数
- 量子神经网络架构的自动化搜索
  - 学习率度量（相对波动，RF）：$\sigma = \frac{\sqrt{\operatorname{Var}_\Xi{\mathcal{L}}}}{\lVert\lambda\rVert_1}$
- LCQNN
- 量子监督学习：输入酉矩阵，输出标签（演化过程、反演变换等）

---
layout: image
image: ./images/zxd/IMG_20251107_114028.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_114141.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_114455.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_114730.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_115215.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_115428.jpg
backgroundSize: contain
---

---

## 量子设计自动化：超导量子计算噪音分析

吴沣

<div class="text-sm">

- 宏观超导量子体系
  - 量子谐振子：电感—电容，所有能级间距相等
  - Transmon：Josephson 结—电容，能够直接操作 0/1 能级
- 量子设计自动化
  - 电子设计自动化（EDA）：设计、验证、制造
- 量子计算中的噪音
  - 经典计算：高低电平的容忍范围很大
  - 量子计算：波函数是连续变量，Bloch 球上的任何偏移均为误差
- 退相干错误
  - 耗散（$T_1$）：含时微扰，Fermi 黄金规则
  - 纯相位丢失（$T_2$）：频率抖动
  - 微观细节：
    - 超导量子平台：电荷、磁通

</div>

---
layout: image
image: ./images/zxd/IMG_20251107_133553.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_133739.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_134305.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_134433.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_132403.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_133200.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_133448.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_135155.jpg
backgroundSize: contain
---

---

## 量子连通性是否会影响量子线路的复杂性？

袁佩

- 量子线路复杂性
  - 深度：并行运算时间
  - 大小：总时间
  - 比特数：空间
- 量子连通性
  - 两比特门的连接性
  - 跨越 N 个比特的 CNOT 需要分解为 N 个相邻的 CNOT

---

## 适配高性能超导量子计算机的软件框架

储文皓

- 硬件定义到软件驱动
- 量子计算的硬件挑战：时钟速度（clock speed）、连通性（connectivity）、成本（cost）
- 硬件体系：
  - 稀释制冷机：水冷+减震设备
  - 室温操控系统：BIOS
  - 传输系统：系统总线/PCIe 接口
  - QPU：CPU

---
layout: image
image: ./images/zxd/IMG_20251107_145610.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_150038.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_150748.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_152000.jpg
backgroundSize: contain
---

---

## 量子程序自动化验证

周立

- 刻画量子状态性质
  - 定量：量子谓词（Hermitian 算子）
  - 定性：子空间（射影算子）
- 量子 Hoare 逻辑：首个完备的量子程序逻辑
- 量子纠错码的验证
  - 替换（经典，基于语法） vs 计算（量子，基于语义）
- 基于重写的 Dirac 符号等式判定
  - AC 项重写

---
layout: image
image: ./images/zxd/IMG_20251107_154844.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_155000.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_155149.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_155354.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_155849.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_160759.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_160838.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_161518.jpg
backgroundSize: contain
---

---

## 量子网络链路层协议的统一框架

林汇平

- 三代协议分类：ED (entanglement decoding)、EE-NC (entanglement encoding, non-local)、SE (state encoding)

---
layout: image
image: ./images/zxd/IMG_20251107_162350.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_163106.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251107_163902.jpg
backgroundSize: contain
---

---

## 强表达性的断言语言和量子程序的完备性验证

苏博南

- 断言语言
  - 语言：可数个 primitive symbols + 有限个生成规则
  - 断言语言：表达前置/后置条件的语言
  - 量子谓词并不是一个语言

---
layout: image
image: ./images/zxd/IMG_20251107_165536.jpg
backgroundSize: contain
---

---

## 无块编码的量子奇异值变换

李彤阳

- 量子奇异值变换（QSVT）
- 局域 Hamiltonian（例如 Ising 模型），$H = \sum_{k=1}^L \lambda_k P_k$
  - Unitary 门的线性组合（LSU）：辅助比特需要 $\Omega(\log L)$ 个
- Trotter 分解
  - 不需要辅助比特，不需要多受控门，但复杂度较高 $O(t^{1+1/p}/\epsilon^{1/p})$
- 将 LCU 替换为经典随机化的分布

---
layout: image
image: ./images/zxd/IMG_20251108_090642.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_090810.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_091507.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_091657.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_092048.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_092459.jpg
backgroundSize: contain
---

---

## 量子 Hamiltonian 验证

高敏博

- 给定 Hamiltonian 的演化 $e^{-iHt}$，去学习 $H$

---
layout: image
image: ./images/zxd/IMG_20251108_094048.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_094424.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_094441.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_095204.jpg
backgroundSize: contain
---

---

## 基于量子 ISA 的比特映射和路由

杨朝辉

- 编译流程
  - 逻辑层综合
  - 比特布局和路由
  - 门调度和优化
- 指令集架构（ISA）
- 量子指令集架构
  - 硬件与软件的接口
  - 态初始化、通用量子门、测量
  - 脉冲层控制没有被硬连接

---
layout: image
image: ./images/zxd/IMG_20251108_100401.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_100420.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_100525.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_100727.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_101004.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_101029.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_101128.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_101319.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_101715.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_102200.jpg
backgroundSize: contain
---

---

## 量子线路综合与优化的数学问题

孙晓明

- 可逆计算
- 线路压缩
- 通用可逆门：{NOT, CNOT, Toffoli}
  - 2-qudit 上：{1-qudit, 2-qudit} 即为通用

---
layout: image
image: ./images/zxd/IMG_20251108_104558.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_104902.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_104945.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_105335.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_105602.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_105957.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_110712.jpg
backgroundSize: contain
---

---

## Halma：基于路由的缺陷处理技术

周润石

---
layout: image
image: ./images/zxd/IMG_20251108_112710.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_113214.jpg
backgroundSize: contain
---

---

## 面向表面码的可扩展实时解码架构

张凯

- Clifford 线路：可以离线解码
- 非 Clifford 门：需要实时解码和动态反馈
- 实时解码需要常数的延迟，而不必须要小于超导读取时间（1μs）
  - 流水线、并行

---
layout: image
image: ./images/zxd/IMG_20251108_114656.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_114944.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115124.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115300.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115424.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115617.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115657.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115813.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_115947.jpg
backgroundSize: contain
---

---

## 超导量子计算进展

龚明

- Josephson 结
  - RCSJ 模型，洗衣板势能
  - 热激发 vs 量子隧穿
  - 宏观量子隧穿，利用铜粉滤波器

---
layout: image
image: ./images/zxd/IMG_20251108_132317.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_132331.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_132440.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_132648.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_132733.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_132847.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133002.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133141.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133339.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133411.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133511.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133654.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133743.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133814.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_133919.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134032.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134148.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134327.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134413.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134537.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134628.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134810.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_134906.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135011.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135101.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135150.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135345.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135702.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135800.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135942.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_135952.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140016.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140041.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140115.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140153.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140234.jpg
backgroundSize: contain
---

---

## 任意两比特门统一控制的高效实现

燕飞

- 两比特门的 Cartan 分解
  - Weyl chamber
  - $U \in SU(4), U = (K_1\otimes K_2) U_w (K_3\otimes K_4)$
- AshN 门

---
layout: image
image: ./images/zxd/IMG_20251108_140611.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140722.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140818.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_140915.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_141233.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_141344.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_141512.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_141705.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_141734.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_141938.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142025.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142220.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142336.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142515.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142618.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142732.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142848.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_142944.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143008.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143111.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143151.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143337.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143624.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143656.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143822.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_143858.jpg
backgroundSize: contain
---

---

## <sup>171</sup>Yb 亚稳态的高保真量子门和擦除转换

彭湃

<div class="flex gap-16">
<div class="flex-1">

- 中性原子阵列
  - 光镊实现原子囚禁
  - 基态能级编码量子比特
  - Rydberg 态产生相互作用
  - 大规模、长相干时间、强相互作用
- 功能分区+相干移动
- 原子阵列物理系统
  - 初始化：光学泵浦
  - 单比特门：拉曼/射频
  - 读取：荧光成像
  - CZ 门：基于 Rydberg 阻塞

</div>
<div class="flex-1">

- 擦除误差
  - Yb171：具有基态和亚稳态
- 大规模快速量子门控制
  - 囚禁光镊+控制光镊

</div>
</div>

---
layout: image
image: ./images/zxd/IMG_20251108_144630.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_144750.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_145309.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_150317.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_150512.jpg
backgroundSize: contain
---

---

## 低开销容错量子计算

李颖

- 错误阈值
- Lattice surgery
- Code surgery

---
layout: image
image: ./images/zxd/IMG_20251108_155254.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_155425.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_161437.jpg
backgroundSize: contain
---

---

## Louvre：基于扩展量子门集合的 LDPC 纠错码

孔令航

- Louvre code
  - Louvre 7：连接数 4.5
  - Louvre 8：连接数 4

---
layout: image
image: ./images/zxd/IMG_20251108_162512.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_163009.jpg
backgroundSize: contain
---


---

## 量子纠错码的解码算法

劳玲玲

- Unified lattice

---
layout: image
image: ./images/zxd/IMG_20251108_170729.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_171600.jpg
backgroundSize: contain
---

---
layout: image
image: ./images/zxd/IMG_20251108_171725.jpg
backgroundSize: contain
---
