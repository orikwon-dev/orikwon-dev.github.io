---
title: Unity 2D 라이팅 분석
description: Unity의 새로운 2D 라이팅 시스템에 대한 분석 및 최적화 팁을 소개합니다.
tags: [Unity]
date: 2026-06-07
---

## Unity 2D Lighting System

Unity의 2D 라이팅 시스템은 모바일 및 저사양 디바이스에서 뛰어난 비주얼을 제공하기에 적합합니다.

### 최적화 주요 요점
- **Light Blend Style 최소화**: 가능한 적은 스타일의 조명을 혼합해 그리기를 줄입니다.
- **Normal Map 사용 주의**: 모바일 성능 제약을 염두에 두어 법선 맵 연산을 신중히 제한적으로 도입합니다.
