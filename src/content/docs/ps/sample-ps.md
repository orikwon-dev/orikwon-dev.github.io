---
title: 백준 1000번 - A+B 풀이
description: 백준 온라인 저지 1000번 문제의 C# 언어 기반 풀이 기록
tags: [PS, CSharp]
date: 2026-06-05
---

## A+B 문제 해결 과정

간단한 기본 연산 및 표준 입출력을 활용하는 단계별 해결 방식입니다.

### C# 코드 예시
```csharp
using System;

class Program
{
    static void Main()
    {
        string[] input = Console.ReadLine().Split();
        int a = int.Parse(input[0]);
        int b = int.Parse(input[1]);
        
        Console.WriteLine(a + b);
    }
}
```
