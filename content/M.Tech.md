# 🧠 High-Speed Standard Cell Library Design (65nm CMOS)

**M.Tech Capstone Project – IIIT Delhi**  
**Focus:** High-Performance Flip-Flops & Sequential Cells  
**Technology:** 65nm CMOS  
**Tools:** Cadence Virtuoso, Eldo Simulator  

---

## 🔍 Project Overview

Modern high-performance VLSI systems rely heavily on **standard cell libraries** for rapid, automated backend design. However, conventional libraries often fall short for **performance-critical blocks**, especially sequential elements like **flip-flops and latches**, which dominate:

- Clock-to-Q delay  
- Power consumption  
- Overall system timing margins  

This project focused on **designing a custom high-speed standard cell library**, with a primary emphasis on **flip-flop architectures**, to achieve:

- Lower clock-to-Q delay  
- Improved power-delay product (PDP)  
- Robust operation across PVT corners  
- DFT-friendly scan support  

---

## 🎯 Objectives

- Evaluate multiple flip-flop architectures at transistor level  
- Identify the best power-performance trade-off for high-speed libraries  
- Design **production-ready standard cells**:
  - Scan TSPC Flip-Flop
  - Scan-Enable TSPC Flip-Flop
  - Negative Level-Triggered Latch
- Perform **pre-layout and post-layout characterization**
- Benchmark designs against **industry (STM) standard cells**

---

## 🧪 Architecture Exploration & Trade-Off Analysis

Analyzed and simulated **9 flip-flop architectures**, including:

- Transmission-Gate Master-Slave FF  
- Sense-Amplifier Based FF  
- DCVSPG Logic FF  
- Razor FF  
- Semi-Dynamic FF  
- Push-Pull FF  
- **True Single-Phase Clock (TSPC) FF**  
- C2MOS FF  

### 🔑 Key Insight

After detailed comparison across **clock-to-Q delay, setup/hold time, power, PDP, leakage, and transistor count**, **TSPC Flip-Flop** emerged as the **fastest and most area-efficient architecture**:

- Lowest clock-to-Q delay (~157 ps)  
- Fewer transistors → smaller area  
- Excellent PDP for high-speed pipelines  

---

## ⚙️ Custom Cells Designed

### 1️⃣ Scan TSPC Flip-Flop

- Integrated **2:1 MUX** for DFT scan operation  
- Supports both **normal mode** and **scan mode**  
- Optimized transistor sizing to reduce glitches and leakage  

---

### 2️⃣ Scan-Enable TSPC Flip-Flop

- Added **Enable (E)** control  
- Allows clock-gating style behavior  
- Holds output when disabled → power-aware design  

---

### 3️⃣ Negative Level-Triggered Latch

- Built using **clocked tri-state buffers**  
- Robust against sub-threshold leakage  
- Suitable for clock-gating and timing-critical paths  

---

## 📐 Physical Design & Layout

- Full custom layouts created in **Cadence Virtuoso**
- Standard-cell compliant **12-track library**
- Cell height: **2.4 µm**
- Routing optimized using **Metal-1 only**
- Minimal polysilicon usage to reduce parasitics  

| Cell Type | Area (µm²) |
|---------|-----------|
| Scan TSPC FF | 10.056 |
| Scan-Enable TSPC FF | 17.004 |
| Negative Level Latch | 10.8 |

---

## ⏱️ Timing & Power Characterization

**Post-Layout Highlights (Worst-Case Corners):**

- **Clock-to-Q Delay:** as low as **118 ps (LVT)**
- **Negative Hold Time:** improves timing closure
- **Metastability Window:** ~107 ps
- **Dynamic Power:** ~3.17 µW
- **Leakage Power:** optimized via transistor stacking
- **Gaussian hold-time variation** → strong robustness across PVT

---

## 🆚 Industry Benchmarking (STM Cells)

Benchmarked against **STM standard cells** under identical conditions.

### Scan TSPC Flip-Flop

- **~14–15% reduction in data-to-Q delay**
- **~35–38% reduction in total power**
- **Significantly better PDP**

---

### Scan-Enable TSPC Flip-Flop

- **10–14% improvement in delay**
- Comparable or reduced power (depending on VT corner)

---

### Negative Level-Triggered Latch

- **10–13% improvement in delay**
- Maintained power efficiency

**Result:**  
TSPC-based cells consistently outperformed STM equivalents for **high-speed library use cases**.

---

## ➕ Additional Library Cells

Designed and characterized **complex combinational cells**:

- **AOI22x4** — `!(A·B + C·D)`
- **AO311X18** — `(A·B·C + D + E)`

Performed:

- Rigorous transistor sizing for 12-track library
- FO4-based delay characterization
- DFM-compliant physical layouts

---

## 🧩 What This Project Demonstrates

- Transistor-level digital circuit design
- Standard cell library development
- High-speed timing optimization
- Power-performance trade-off analysis
- DFT-aware sequential cell design
- Layout-aware post-silicon characterization
- Industry-grade benchmarking methodology

---

## 🚀 Why This Matters

This project reflects **real-world silicon design workflows** used in:

- CPU / SoC backend teams
- Standard cell library design
- High-performance pipeline design
- Timing-critical digital systems

It demonstrates the ability to take a circuit from **architecture → schematic → layout → characterization → benchmarking**.

---

**Status:** Completed  
**Deliverables:** Schematics, layouts, timing & power reports, benchmark comparisons
