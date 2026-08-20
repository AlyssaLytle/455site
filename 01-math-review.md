---
# try also 'default' to start simple
theme: ./unc-cs
title: Math Foundations
info: |
  ## Mathematical Foundations for Theory of Computation
# 455 Class Slides
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min
kicker: COMP 455 · Models of Languages and Computation
layout: cover
---

# Mathematical Foundations: A Review

UNC-Chapel Hill, Fall 2026

---

# Housekeeping

* To do: 
  * LS00 (syllabus) 
  * LS01 (*after* today)
  * HW00 (*after* today)
* Look under "Modules" and "Pages" on Canvas for course content
* Any logistics questions?

---
kicker: COMP 455 · Models of Languages and Computation
layout: cover
---

# Mathematical Foundations: A Review

UNC-Chapel Hill, Fall 2026

---

# Sets - Definition

A ***set*** is an unordered collection of objects.

The following are sets:


<div style="display:flex;gap:36px;">
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:30px 1px;flex:1;display: grid; place-items: center;">
      <div style="font-family:'Roboto Mono',monospace;font-size:18px;color:#EDF2F7;margin-bottom:12px;">{1, 2, 3}</div>
    </div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:30px 1px;flex:1;display: grid; place-items: center;">
      <div style="font-family:'Roboto Mono',monospace;font-size:18px;color:#EDF2F7;margin-bottom:12px;">"all multiples of 7"</div>
    </div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:30px 1px;flex:1;display: grid; place-items: center;">
      <div style="font-family:'Roboto Mono',monospace;font-size:18px;color:#EDF2F7;margin-bottom:12px;">{"apples", 7, True}</div>
    </div>
  </div>



---

# Properties of Sets

<v-clicks>

Sets don't inherently have an order.

> $\{1, 2, 3\} = \{3, 2, 1\}$

Sets don't count repeats.

> $\{1, 1, 2\} = \{1, 2\}$

</v-clicks>

---

# Sets - Notation


* $a \in A$ means $a$ is an element of $A$.

* $a \notin A$ means $a$ is *not* an element of $A$.

* $|A|$ is the cardinality, or number of elements, in $A$.

* $\emptyset$ is the empty set.



---

# Common Sets

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:22px;">
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-size:30px;color:#6CB6EA;margin-bottom:8px;">

$\mathbb{N} = \{0,1,\ldots \}$

</div>Natural Numbers</div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#6CB6EA;margin-bottom:8px;">

$\mathbb{Z} = \{ \ldots, -1, 0, 1, \ldots \}$

</div>Integers</div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#6CB6EA;margin-bottom:8px;">
    
   $\mathbb{Q} = \{ \frac{a}{b} | a,b \in \mathbb{Z} \}$
    
</div><div style="font-size:24px;color:#DCE3EC;">Rational Numbers</div></div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#6CB6EA;margin-bottom:8px;">
    
$\mathbb{R}$

</div><div style="font-size:24px;color:#DCE3EC;">Real Numbers</div></div>   
  </div>

---

# Sets You Will See



<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:22px;">

<v-clicks>

  <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#6CB6EA;margin-bottom:8px;">

$\Sigma$ (Alphabet)

</div>

A finite set of symbols

</div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#6CB6EA;margin-bottom:8px;">

$\Sigma^*$

</div>

The set of *all* finite strings over $\Sigma$ 

</div>

<div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px;"><div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#6CB6EA;margin-bottom:8px;">

$L$ (Language)

</div>

A set of strings over $\Sigma$ 

($L \subseteq \Sigma^*)$

</div>

  </v-clicks>
  </div>



---

# Set-Builder Notation

<v-clicks>

  Instead of listing elements, describe the *rule* that qualifies them.

  <div style="font-family:'Roboto Mono',monospace;font-size:36px;color:#EDF2F7;background:#1B3350;border:1px solid #3A6C96;border-radius:12px;padding:26px 38px;display:inline-block;width:fit-content;margin-bottom:20px;">
  
  $\{ x \mid P(x) \}$
  
  </div>
  <div style="font-size:24px;color:#93A5BD;margin-bottom:44px;">
  
  read as: "the set of all $x$ such that $P(x)$ is true"
  
  </div>

  <div style="display:flex;gap:36px;">
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px 32px;flex:1;">
      <div style="font-family:'Roboto Mono',monospace;font-size:20px;color:#EDF2F7;margin-bottom:10px;">
      
$\{ x \in \mathbb{N} \mid x \textrm{ is even} \}$
      
</div>
      <div style="font-size:24px;color:#93A5BD;">
      
$= \{0, 2, 4, 6, \ldots \}$

</div>
    </div>
    <div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:26px 32px;flex:1;">
      <div style="font-family:'Roboto Mono',monospace;font-size:20px;color:#EDF2F7;margin-bottom:10px;">
      
$\{ w \in \Sigma^* \mid w \textrm{ starts with a } 1 \}$
      
</div>
<div style="font-size:24px;color:#93A5BD;">
      
$= \{1, 10, 110, 101, \ldots \}$
      
</div>
    </div>
  </div>

</v-clicks>

---
layout: two-cols
---

::title::

# Subset Operator

A is a *subset* of B if every element of A is also in B.

::left::



<svg viewBox="0 0 460 400" style="width:380px;height:330px;flex-shrink:0;">
      <circle cx="230" cy="180" r="175" fill="#111B2C" stroke="#93A5BD" stroke-width="4"/>
      <circle cx="230" cy="190" r="90" fill="#1B3350" stroke="#6CB6EA" stroke-width="4"/>
      <text x="230" y="90" text-anchor="middle" font-size="26" font-weight="700" fill="#EDF2F7">B</text>
      <text x="230" y="235" text-anchor="middle" font-size="26" font-weight="700" fill="#EDF2F7">A</text>
    </svg>

::right::
    
<v-clicks>

<div style="padding-top: 40px"></div>

* $A \subseteq B$: 
A is a subset of B 

($A$ could equal $B$)
    
* $A \subset B$: 
A is a *proper* subset

($A \neq B$)

* Example: 

$\{$ strings ending in $01 \} \subset \{0,1\}^*$

</v-clicks>

---

# Union and Intersection



  <div style="display:flex;gap:80px;justify-content:center;flex:1;align-items:center;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:18px;">
      <svg viewBox="0 0 400 260" style="width:320px;height:208px;">
        <circle cx="150" cy="130" r="100" fill="#6CB6EA" opacity="0.4"/>
        <circle cx="250" cy="130" r="100" fill="#6CB6EA" opacity="0.4"/>
        <circle cx="150" cy="130" r="100" fill="none" stroke="#93A5BD" stroke-width="3"/>
        <circle cx="250" cy="130" r="100" fill="none" stroke="#93A5BD" stroke-width="3"/>
        <text x="110" y="135" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">A</text>
        <text x="290" y="135" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">B</text>
      </svg>
      <div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#EDF2F7;">
      
$A \cup B$
      
  </div>
      <div style="font-size:24px;color:#93A5BD;text-align:center;">

in $A$ *or* $B$ 

</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:18px;">
      <svg viewBox="0 0 400 260" style="width:320px;height:208px;">
        <defs><clipPath id="isect"><circle cx="150" cy="130" r="100"/></clipPath></defs>
        <circle cx="150" cy="130" r="100" fill="none" stroke="#93A5BD" stroke-width="3"/>
        <circle cx="250" cy="130" r="100" fill="none" stroke="#93A5BD" stroke-width="3"/>
        <circle cx="250" cy="130" r="100" fill="#6CB6EA" opacity="0.55" clip-path="url(#isect)"/>
        <text x="110" y="135" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">A</text>
        <text x="290" y="135" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">B</text>
      </svg>
      <div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#EDF2F7;">
      
$A \cap B$

</div>
      <div style="font-size:24px;color:#93A5BD;text-align:center;">

in $A$ *and* $B$

</div>
    </div>
  </div>


---

# Difference and Complement

  <div style="display:flex;gap:80px;justify-content:center;flex:1;align-items:center;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:18px;">
      <svg viewBox="0 0 400 260" style="width:320px;height:208px;">
        <circle cx="150" cy="130" r="100" fill="#6CB6EA" opacity="0.4"/>
        <circle cx="250" cy="130" r="100" fill="#111B2C"/>
        <circle cx="150" cy="130" r="100" fill="none" stroke="#93A5BD" stroke-width="3"/>
        <circle cx="250" cy="130" r="100" fill="none" stroke="#93A5BD" stroke-width="3"/>
        <text x="110" y="135" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">A</text>
        <text x="290" y="135" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">B</text>
      </svg>
      <div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#EDF2F7;">
      
$A - B$

</div>
      <div style="font-size:24px;color:#93A5BD;text-align:center;">

in $A$, but not in $B$

</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:18px;">
      <svg viewBox="0 0 400 260" style="width:320px;height:208px;">
        <rect x="10" y="10" width="380" height="240" fill="#6CB6EA" opacity="0.28" stroke="#93A5BD" stroke-width="3"/>
        <circle cx="200" cy="130" r="90" fill="#111B2C" stroke="#93A5BD" stroke-width="3"/>
        <text x="200" y="138" text-anchor="middle" font-size="24" font-weight="700" fill="#EDF2F7">A</text>
        <text x="50" y="75" text-anchor="middle" font-size="20" fill="#EDF2F7">&Sigma;*</text>
      </svg>
      <div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#EDF2F7;">
      
$\bar{A}$

</div>
      <div style="font-size:24px;color:#93A5BD;text-align:center;">
      
everything *not* in $A$, relative to the universe

($\Sigma^* - A$)

</div>
    </div>
  </div>


---

# Cartesian Product


$A \times B$ is the set of all ordered pairs $(a, b)$ with $a \in A, b \in B$.

## Example

<v-clicks>

$A = \{1,2\}$ $B=\{x,y\}$

  <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="display:grid;grid-template-columns:repeat(2,110px);gap:14px;margin-top:8px;">
        <div style="background:#1B3350;border:1px solid #3A6C96;border-radius:8px;padding:14px;text-align:center;font-family:'Roboto Mono',monospace;font-size:24px;color:#EDF2F7;">(1,x)</div>
        <div style="background:#1B3350;border:1px solid #3A6C96;border-radius:8px;padding:14px;text-align:center;font-family:'Roboto Mono',monospace;font-size:24px;color:#EDF2F7;">(1,y)</div>
        <div style="background:#1B3350;border:1px solid #3A6C96;border-radius:8px;padding:14px;text-align:center;font-family:'Roboto Mono',monospace;font-size:24px;color:#EDF2F7;">(2,x)</div>
        <div style="background:#1B3350;border:1px solid #3A6C96;border-radius:8px;padding:14px;text-align:center;font-family:'Roboto Mono',monospace;font-size:24px;color:#EDF2F7;">(2,y)</div>
      </div>
    </div>


(Order matters here: $(1,x) \neq (x,1)$)

</v-clicks>

---



# Powerset


 The set of *all subsets* of $A$, written $\mathcal{P}(A)$ or $2^A$.


$\mid \mathcal{P}(A) \mid = 2^{\mid A \mid}$



## Example

<v-clicks>
    
<div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:32px 40px;">
      <div style="font-family:'Roboto Mono',monospace;font-size:26px;color:#DCE3EC;margin-bottom:16px;">
      
$A = \{a, b\}$

</div>

      
$\mathcal{P}(A) = \{ \emptyset, \{a\}, \{b\}, \{a,b\} \}$
  

</div>

</v-clicks>


---

# Set Closure

A set is *closed under an operator* if doing that operation on any items in the set always gives an answer that is also inside the same set. 

If the answer lands outside the set, the set is not closed.


## Example



<div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:12px 40px;">

<v-clicks>

* Integers are closed under addition 

* Even numbers are closed under addition 

* Integers are *not* closed under division 

</v-clicks>
</div>

---

# Infinite Sets and Countability

A countably infinite set's elements can be put into a one-to-one mapping with the natural numbers

## Example

<v-clicks>

<div style="background:#1A2740;border:1px solid #2C3E56;border-radius:12px;padding:12px 40px;">

Previously, you may have proven a set is countable by defining a bijection between it and the natural numbers.

Question: Did you see the proof by contradiction that the real numbers are uncountable using *diagonalization*?

</div>

</v-clicks>


---

# Functions and Relations



* A  **function**  $f$ is a relation on $A$ and $B$ that maps each $a$ from $A$ to exactly one element $b=f(a)$ from $B$. 

<!-- You may have previously seen it as $b=f(a)$, but it also can be thought of $(a,b) \in f$. -->

* We can also state $f: A \to B$. This can be said as "$f$ maps $A$ to $B$"

  <div style="display:flex;gap:64px;align-items:center;flex:1;">
    <svg viewBox="0 0 500 320" style="width:440px;height:282px;">
      <ellipse cx="130" cy="160" rx="100" ry="140" fill="#1A2740" stroke="#93A5BD" stroke-width="3"/>
      <ellipse cx="370" cy="160" rx="100" ry="140" fill="#1A2740" stroke="#93A5BD" stroke-width="3"/>
      <circle cx="130" cy="90" r="8" fill="#6CB6EA"/><circle cx="130" cy="160" r="8" fill="#6CB6EA"/><circle cx="130" cy="230" r="8" fill="#6CB6EA"/>
      <circle cx="370" cy="70" r="8" fill="#93A5BD"/><circle cx="370" cy="140" r="8" fill="#93A5BD"/><circle cx="370" cy="210" r="8" fill="#93A5BD"/><circle cx="370" cy="260" r="8" fill="#93A5BD"/>
      <line x1="130" y1="90" x2="370" y2="140" stroke="#6CB6EA" stroke-width="2"/>
      <line x1="130" y1="160" x2="370" y2="140" stroke="#6CB6EA" stroke-width="2"/>
      <line x1="130" y1="230" x2="370" y2="210" stroke="#6CB6EA" stroke-width="2"/>
      <text x="130" y="30" text-anchor="middle" font-size="24" fill="#EDF2F7" font-weight="700">A</text>
      <text x="370" y="30" text-anchor="middle" font-size="24" fill="#EDF2F7" font-weight="700">B</text>
    </svg>
    <div style="display:flex;flex-direction:column;gap:20px;font-size:26px;color:#DCE3EC;line-height:1.5;max-width:560px;">
      <div>Every dot in A has exactly one arrow out. Multiple dots in A can share a target.</div>
    </div>
  </div>

---

# Logical Operators

  <div style="display:flex;flex-direction:column;">
    <div style="display:flex;align-items:baseline;gap:32px;padding:14px 0;border-bottom:1px solid #2C3E56;"><div style="font-family:'Roboto Mono',monospace;font-size:28px;color:#6CB6EA;width:104px;">&not;p</div><div style="font-size:24px;color:#DCE3EC;">not &mdash; true when p is false</div></div>
    <div style="display:flex;align-items:baseline;gap:32px;padding:14px 0;border-bottom:1px solid #2C3E56;"><div style="font-family:'Roboto Mono',monospace;font-size:28px;color:#6CB6EA;width:104px;">p &and; q</div><div style="font-size:24px;color:#DCE3EC;">and &mdash; true only when both are true</div></div>
    <div style="display:flex;align-items:baseline;gap:32px;padding:14px 0;border-bottom:1px solid #2C3E56;"><div style="font-family:'Roboto Mono',monospace;font-size:28px;color:#6CB6EA;width:104px;">p &or; q</div><div style="font-size:24px;color:#DCE3EC;">or &mdash; true when at least one is true</div></div>
    <div style="display:flex;align-items:baseline;gap:32px;padding:14px 0;border-bottom:1px solid #2C3E56;"><div style="font-family:'Roboto Mono',monospace;font-size:28px;color:#6CB6EA;width:104px;">p &rarr; q</div><div style="font-size:24px;color:#DCE3EC;">implies &mdash; false only when p is true and q is false</div></div>
    <div style="display:flex;align-items:baseline;gap:32px;padding:14px 0;"><div style="font-family:'Roboto Mono',monospace;font-size:28px;color:#6CB6EA;width:104px;">p &harr; q</div><div style="font-size:24px;color:#DCE3EC;">iff &mdash; true when p and q match</div></div>
  </div>


---

# Predicate Logic + Quantifiers

A predicate $P(x)$ is a statement whose truth depends on $x$. Quantifiers say how many $x$ make it true.

  <div style="display:flex;gap:48px;flex:1;align-items:center;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
      <svg viewBox="0 0 260 220" style="width:190px;height:161px;">
        <circle cx="130" cy="110" r="100" fill="#111B2C" stroke="#93A5BD" stroke-width="4"/>
        <circle cx="80" cy="80" r="10" fill="#6CB6EA"/><circle cx="130" cy="60" r="10" fill="#6CB6EA"/><circle cx="180" cy="85" r="10" fill="#6CB6EA"/>
        <circle cx="90" cy="140" r="10" fill="#6CB6EA"/><circle cx="150" cy="150" r="10" fill="#6CB6EA"/><circle cx="190" cy="130" r="10" fill="#6CB6EA"/>
      </svg>
      <div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#EDF2F7;">&forall;x P(x)</div>
      <div style="font-size:24px;color:#93A5BD;text-align:center;">"for all" &mdash; every dot must satisfy P</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
      <svg viewBox="0 0 260 220" style="width:190px;height:161px;">
        <circle cx="130" cy="110" r="100" fill="#111B2C" stroke="#93A5BD" stroke-width="4"/>
        <circle cx="80" cy="80" r="10" fill="#3A4A5F"/><circle cx="130" cy="60" r="10" fill="#6CB6EA"/><circle cx="180" cy="85" r="10" fill="#3A4A5F"/>
        <circle cx="90" cy="140" r="10" fill="#3A4A5F"/><circle cx="150" cy="150" r="10" fill="#3A4A5F"/><circle cx="190" cy="130" r="10" fill="#3A4A5F"/>
      </svg>
      <div style="font-family:'Roboto Mono',monospace;font-size:30px;color:#EDF2F7;">&exist;x P(x)</div>
      <div style="font-size:24px;color:#93A5BD;text-align:center;">"there exists" &mdash; at least one dot suffices</div>
    </div>

  </div>



<!-- Also include negating quantifiers -->

---

# Proofs

## What a proof looks like

<v-clicks>

- A good proof is like good code, clear and easy to follow! 
- Think of narrating your proof like commenting your code--you want the next person to read it to be able to follow your train of thought.
- I'm going to introduce a specific format for writing proofs. *You do not have to use this format for this course*, but it can be useful to make sure you are fully documenting and explaining your proofs. It also gives a linear structure to your argument.
</v-clicks>

---

# What a proof looks like


The two column format looks like this: 



| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 
|$1.$ | $\textrm{Your conclusion}$ | $\textrm{How you came to that conclusion}$ |
|$2.$ | $\ldots$ | |
|$3.$ | $\ldots$ | |
|$\vdots$ | |
|$\square$ | | 

---

# Finding P and Q

<v-clicks>

When trying to prove a statement, 
you can typically break that statement into the form $P \implies Q$.


##  Example

- "If $x$ is even, $x^2$ is even." 
- $P:$ $x$ is even 
- $Q:$ $x^2$ is even

</v-clicks>



---

# Finding P and Q


<v-clicks>
   
- "$x-1 < \left \lfloor{x}\right \rfloor$" 
- $P:$ Your body of knowledge
- $Q:$ $x-1 < \left \lfloor{x}\right \rfloor$
    
</v-clicks>



<!-- 
---

# Rewrites

Here are some common rewrites you might see when constructing your proofs:

<v-clicks>

- $n$ is an even integer converts to $n = 2t$ for some $t$
- $n$ is an odd integer converts to $n = 2t + 1$ for some $t$
- $n$ is a rational number converts to $n = \frac{a}{b}$ where $a$ and $b$ are integers
- $n$ divides $m$ converts to $m = nt$ for some integer $t$
- $n$ is a square converts to $n = t^2$ for some integer $t$.
- $n = a \bmod b$ converts to $n = bt + a$ for some integer $t$.
</v-clicks>

  -->
---

# Main Types of Proofs

The typical ways we show $P \implies Q$ are the following:

- Direct Proof

- Proof By Contradiction

- Proof By Contrapositive

- Proof By Counterexample

- Proof By Induction






---

# Types of Proofs - Direct


 The first type of proof we will discuss is called a **direct proof**. Basically, we are trying to to prove $P  \rightarrow Q$ by starting at $P$ and getting to $Q$.
 
 For example, say we want to prove the following: "If $x$ is even, $x^2$ is even". 
 
 Then $P$ is "$x$ is even" and $Q$ is "$x^2$ is even"


---


# An Example of a Direct Proof

| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 
|<span v-click="1">$1.$</span>| <span v-click="1"> $x \textrm{ is even}$ </span> | <span v-click="1"> $\textrm{Given (In other words, this is our } P \textrm{)}$ </span>|
|<span v-click="2">$2.$ </span> | <span v-click="2"> $x = 2k, {} k \in \mathbb{Z}$ </span> | <span v-click="2">$\textrm{Definition of Even Number}$ </span> |
|<span v-click="3">$3.$ </span> | <span v-click="3">$x^2 = (2k)^2$ </span> | <span v-click="3">$\textrm{Squared both sides of Line 2}$ </span>|
|<span v-click="4">$4.$ </span> | <span v-click="4">$x^2 = 4k^2$ </span> | <span v-click="4">$\textrm{Simplified Line 3}$ </span>|
|<span v-click="5">$5.$ </span> | <span v-click="5">$x^2 = 2(2k^2)$ </span> | <span v-click="5">$\textrm{Rewrote Line 4}$ </span>|
|<span v-click="6">$6.$ </span> | <span v-click="6">$x^2 \textrm{ is even}$ </span> | <span v-click="6">$\textrm{Definition of Even Number. (And so we've reached } Q) ~ \square$ </span>|


<div v-click="7">

**Note that at every step you're basically saying, "Therefore..." this is where your implication $\rightarrow$ is coming in.**
</div>






<!-- ---

# Example Proof


We want to show $x-1 < \left \lfloor{x}\right \rfloor$






---

# Example Proof


We want to show $x-1 < \left \lfloor{x}\right \rfloor$

 $| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 

     1.$ | $x = y + d, y \in \mathbb{Z}, d \in [0,1)$ | $\textrm{Rewrite of x}$ |
     2.$ | $d < 1$ | $\textrm{Defined in Line 1}$ |
     3.$ | $d - 1 < 0$ | $\textrm{Subtracted }1 \textrm{ from both sides of Line 2}$ |
     4.$ | $y + d - 1 < y$ | $\textrm{Added } y \textrm{ to both sides}$ |
     5.$ | $x - 1 < y$ | $\textrm{Plugged in Line 1 to Line 4.}$ |
     6.$ | $y = \left \lfloor{x}\right \rfloor$ | $\textrm{Applied definition of floor to line 1.}$ |
     7.$ | $x - 1 < \left \lfloor{x}\right \rfloor$ | $\textrm{Plugged line 6 into line 5. } \square 
 \end{array}$  
 
 **Note that this is still a direct proof ($p  \rightarrow q$) but $p$ is never directly stated. If $p$ is never directly stated, you can just think of $p$ as your set of knowledge of the world.** -->
 






---

# Proof By Contradiction

<v-clicks>

- $P \implies Q \equiv \neg(P \land \neg Q)$. 

- This leads to why we do proofs by contradiction. 

- Instead of proving $P \implies Q$, we prove $P \land \neg Q$ does not hold. 

- In other words, we start with $P \land \neg Q$ and get to an impossible state $\bot$. 

- Fun fact: A famous proof is the proof that $\sqrt{2}$ is irrational.

</v-clicks>


---

# Proof By Contradiction - Example

- We want to prove: If $x^2$ is odd, $x$ is odd.  

| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 
|<span v-click="1">$1.$</span>| <span v-click="1"> $x^2 \textrm{ is odd and } x \textrm { is even}$ </span> | <span v-click="1"> $\textrm{Assumption } (P \land \neg Q)$ </span>|
|<span v-click="2">$2.$ </span> | <span v-click="2"> $x = 2k, {} k \in \mathbb{Z}$ </span> | <span v-click="2">$\textrm{Definition of Even Number}$ </span> |
|<span v-click="3">$3.$ </span> | <span v-click="3">$x^2 = (2k)^2$ </span> | <span v-click="3">$\textrm{Squared both sides of Line 2}$ </span>|
|<span v-click="4">$4.$ </span> | <span v-click="4">$x^2 = 4k^2$ </span> | <span v-click="4">$\textrm{Simplified Line 3}$ </span>|
|<span v-click="5">$5.$ </span> | <span v-click="5">$x^2 = 2(2k^2)$ </span> | <span v-click="5">$\textrm{Rewrote Line 4}$ </span>|
|<span v-click="6">$6.$ </span> | <span v-click="6">$x^2 \textrm{ is even}$ </span> | <span v-click="6">$\textrm{Definition of Even Number.}$ </span>|
|<span v-click="7">$7.$ </span> | <span v-click="7">$\bot$ </span> | <span v-click="7">$\textrm{Lines 1 and 6 Contradict. } \square$ </span>|

<!-- ---

# Contradiction Example:

For this proof we are going to use the following statement: 

**Squared Evens Rule:** If $x^2$ is even, then $x$ is even.

Additionally, recall the definition of a rational number:

A rational number can be written as $\frac{a}{b}$ such that $a, b \in \mathbb{Z}$ and $GCD(a,b)=1$.

---

# Contradiction Example

\begin{equation*}
| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 

   1.$ | $ \sqrt{2} \textrm{ is rational}$ | $ \textrm{Assumption}$ |
   2.$ | $\sqrt{2} = \frac{a}{b} \land a,b \in \mathbb{Z} \land GCD(a,b) = 1$ | $\textrm{Definition of Rational Numbers}$ |
   3.$ | $\sqrt{2} b = a$ | $\textrm{Took left side of 2. and multiplied both sides by } b$ |
   4.$ | $2 b^2 = a^2$ | $\textrm{Squared both sides}$ |
   5.$ | $a^2 \textrm{ is even}$ | $\textrm{Definition of even number}$ |
   6.$ | $a \textrm{ is even}$ | $\textrm{Squared Evens Rule}$ |
   7.$ | $a = 2k \land k \in \mathbb{Z}$ | $\textrm{Definition of even number}$ |
   8.$ | $2b^2 = (2k)^2$ | $\textrm{Plugged in 7. to 4.}$ |
   9.$ | $2b^2 = 4k^2$ | $\textrm{Simplified}$ |
   10.$ | $b^2 = 2k^2$ | $\textrm{Divided both sides by } 2$ |
   11.$ | $b^2 \textrm{ is even}$ | $\textrm{Definition of even number}$ |
   12.$ | $b \textrm{ is even}$ | $\textrm{Squared Evens Rule}$ |
   13.$ | $b= 2m \land m \in \mathbb{Z}$ | $\textrm{Definition of even number}$ |
   14.$ | $2 \textrm{ is a factor of both } a \textrm{ and } b$ | $\textrm{Lines 7. and 13.}$ |
   15.$ | $\bot$ | $\textrm{Lines 2. and 14. contradict each other } \square
\end{array}
\end{equation*} -->

---

# Proof by Contrapositive



- For a proof of contrapositive, you're going to use the equality: 
$P \implies Q \equiv \neg Q \implies \neg P$.

- In other words, instead of proving $P \implies Q$, we are going to assume $\neg Q$ and show that it leads to $\neg P$.


##  Example 
<v-clicks>

- We want to prove: If $x^2$ is odd, $x$ is odd.

- $P$: $x^2$ is odd, $Q$: $x$ is odd

- $\neg Q \implies \neg P$: If $x$ is even, then $x^2$ is even.

- So, essentially, $\neg Q$ becomes the top line of your proof and you work to get to $\neg P$

</v-clicks>


---

# Proof by Counterexample

If you want to disprove something, the easiest way is usually by counter example. 

You don't have to do this in the typical two column format as long as you make your reasoning clear.

##  Example

<v-clicks>


- Say I ask you to prove the following is false: If $x$ is even, $x^2$ is odd.

- A sufficient solution would be: "Choose $x = 2$. Then, $x^2 = 4$. $x$ is even, but $x^2$ is not odd $\square$."

</v-clicks>

---

# Other Types of Proofs

You may see some other types of proofs that follow from the types of proofs we've already discussed. 

<vclick>

- Proof by Cases
- Proof by Construction
</vclick>   
    
<!-- ---

# Biconditional Proofs

- For our proofs, we are basically writing a $\implies$ to get from line to line.

- Sometimes, instead of proving $P \implies Q$, you'll want to prove $P \iff Q$. 

- The benefit of this type of proof is that you can start from $P$ or $Q$ to get to the other side. This is because $P \iff Q$  is the same as saying $Q \iff P$. 

- The added requirement is that you have to use $\iff$ rules to get from line to line. Thankfully, most definitions are actually defined using $\iff$. -->

<!-- ---

# Biconditional Proofs


##  Example
We want to prove $x \in \overline{A \cap B} \iff x \in \bar{A} \cup \bar{B}$




---

# Logical Equivalence
Proofs of logical equivalence are of the form $P \iff Q$. 

Why? Remember that if $P \equiv Q$, then $P \iff Q$ is always true!


##  Example
Say we want to prove $a \implies b \equiv \neg b \implies \neg a$.

So we can say $P: a \implies b$ and $Q: \neg b \implies \neg a$.

First, let's do this proof starting at $P$ to get to $Q$.
 
<!-- \begin{equation*}
| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 

    1.$ | $a \implies b$ | $\textrm{Given } (P)$ |
    2.$ | $\equiv \neg a \lor b$ | $\textrm{Implication Definition}$ |
    3.$ | $\equiv b \lor \neg a$ | $\textrm{Commutativity}$ |
    4.$ | $\equiv \neg (\neg b) \lor \neg a$ | $\textrm{Double Negation}$ |
    5.$ | $\equiv \neg b \implies \neg a$ | $\textrm{Implication Definition }  \square ~ (Q)~$ | 
\end{array}
\end{equation*} -->

<!-- ---

# Logical Equivalence Cont.

As previously stated, we can also start at $Q$ to get to $P$.  -->

<!-- \begin{equation*}
| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 

    1.$ | $\equiv \neg b \implies \neg a$ | $\textrm{Given } (Q)$ |
    2.$ | $\equiv \neg \neg b \lor \neg a$ | $\textrm{Implication Definition}$ |
    3.$ | $\equiv b \lor \neg a$ | $\textrm{Double Negation}$ | 
    4.$ | $\equiv \neg a \lor b$ | $\textrm{Commutativity}$ |
    5.$ | $\equiv a \implies b$ | $\textrm{Implication Definition } \square ~ (P)  $ | 
\end{array}
\end{equation*} -->

<!-- Either of these proofs are acceptable because they are saying the same thing! Which side you want to start at is really a personal preference. -->


---

# Forall

<v-clicks>

- You may want to prove statements such as "$\forall x \in S, P(x) \implies Q(x)$."

- The proofs we've done so far are actually "for all" proofs: 
    - $\forall x \in \mathbb{Z}$, If $x$ is even, $x^2$ is even
    - $\forall x \in \mathbb{Z}$, If $x^2$ is odd, $x$ is odd

- We can also prove "for all" statements by exhaustively looking at every element in $S$ and checking if $P(x)$ holds.

- Fittingly, this is called a **Proof by Exhaustion**.

</v-clicks>
<!-- 

# Forall, Exhaustive

However, we can also prove "for all" statements by exhaustively looking at every element in $S$ and checking if $P(x)$ holds.

Fittingly, this is called a **Proof by Exhaustion**.

A good example is the set problem you've already seen:

- $F = \{$Erik, Jos&eacute;, Nicoleta, Aksana$\}$
- $V = \{$Aksana, Erik$\}$ is the set of your friends who are vegetarian
- $N = \{$Aksana$\}$ is the set of your friends who are vegan
- We want to prove: $\forall x \in F,{} x \in N \implies x \in V$

-->


---

# Proof by Cases

<v-clicks>

A **Proof by Cases** is a kind of proof by exhaustion. You are breaking the set you are proving something about into smaller sets.

A good example is proving this definition of absolute value is correct.

$\mid x \mid
 = sgn(x) \cdot x$

$
sgn(x) = 
\begin{cases}
-1 & x<0 \\
0 & x =0 \\
1 & x>0
\end{cases}
$

</v-clicks> 


---

# Proof by Cases

    
Case 1: $x > 0$

| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 
|$1.$ | $x > 0$ | $\textrm{Case Assertion}$ |
|$2.$ | $sgn(x) = 1$ | $\textrm{Signum Def.}$ |
|$3.$ | $sgn(x) \cdot x = x$ | $\textrm{Multiply both sides by } x$ |
|$4.$ | $\mid x\mid  = x$ | $\textrm{Applied Def. of Absolute Value to Line 1}$ |
|$5.$ | $x \cdot sgn(x) = \mid x \mid$ | $\textrm{Combined Lines 3 and 4}$ |



---

# Proof by Cases Cont.

Case 2: $x = 0$

| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 
|$1.$ | $x = 0$ | $\textrm{Case Assertion}$ |
|$2.$ | $sgn(x) = 0$ | $\textrm{Signum Def.}$ |
|$3.$ | $sgn(x) \cdot x = 0$ | $\textrm{Multiply both sides by } x$ |
|$4.$ | $\mid x \mid = 0$ | $\textrm{Applied Def. of Absolute Value to Line 1}$ |
|$5.$ | $x \cdot sgn(x) = \mid x \mid$ | $\textrm{Combined Lines 3 and 4}$ |


---

# Proof by Cases Cont.

Case 3: $x < 0$

| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 
|$1.$ | $x < 0$ | $\textrm{Case Assertion}$ |
|$2.$ | $sgn(x) = -1$ | $\textrm{Signum Def.}$ |
|$3.$ | $sgn(x) \cdot x = -x$ | $\textrm{Multiply both sides by } x$ |
|$4.$ | $\mid x \mid = -x$ | $\textrm{Applied Def. of Absolute Value to Line 1}$ |
|$5.$ | $x \cdot sgn(x) = \mid x \mid$ | $\textrm{Combined Lines 3 and 4}$ |
    

---

# Proof of Existence

Sometimes you just need to prove the existence of something. 

$\exists x \in S, {} P(x)$.

<!-- Again, like we discussed in class, you can show the existence of something by looking at every element of the set and finding an $x$ such that $P(x)$ is true. 

Let's go back to our food example:

- $F = \{$Erik, Jos&eacute;, Nicoleta, Aksana$\}$
- $V = \{$Aksana, Erik$\}$ is the set of your friends who are vegetarian
- $N = \{$Aksana$\}$ is the set of your friends who are vegan
- We want to prove: $\exists x \in F,{} x \in N \implies x \in V$ -->


Sometimes you will have to prove the existence of more complicated things. You might have to *construct* a solution and then prove it's a valid solution. 

This can also be called a **constructive proof** or **proof by construction** because you are literally constructing your own example.

---

# Proof by Construction - Example 

For example, you might want to argue the usefulness of exponential encryption by proving that exponential encryption can be decrypted:

$\exists e,d,x,N \in \mathbb{Z}, {} x^{e \cdot d} \bmod N = x$

##  Construction (RSA Encryption)

- $N = p \cdot q$
- $e \cdot d = 1 \bmod (p-1)(q-1)$

##  Proof 

Plug in $N = p \cdot q$ and $e \cdot d = 1 \bmod (p-1)(q-1)$ to demonstrate $x^{e \cdot d} \bmod N = x$.



---

# Proof by (Strong) Induction

<v-clicks>

- Induction is a type of proof we can do on recursively defined functions and sets
- Say we are trying to prove $R(x)$ holds in a recursively defined set $S = \{S_0, S_1, S_2, \ldots \}$
- We can prove this by:
    1. Showing $R(x)$ holds for the base case(s) of $S$
    2. Assuming $R(k)$ holds for all $k < n$ in the recursive rule, showing that it also holds for step $n$. 
    In other words, we're showing $\big(R(S_0) \land R(S_1) \land \ldots \land R(S_{n-2}) \land R(S_{n-1})\big) \implies R(S_{n})$.   
- Remember that many things can be defined recursively, so even though $x \in S$, $x$ isn't necessarily a single element. $x$ can also be a set/function/mapping etc! 
</v-clicks>


<!-- 
---

# Let's Start With an Example






---

# Example with Template



Recall the Fibonacci series...


- The base case: $F(0) = 0, F(1) = 1$
- Recursive rule: For $n > 1$, $F(n) = F(n-1) + F(n-2)$.


We want to prove the following about the sum of the first $n$ numbers of the series:

$\forall n \in \mathbb{N}, F(0) + F(1) + F(2) + \ldots + F(n-1) + F(n) = F(n+2) - 1$.





---

# Example with Template


S1. State the ‘for all’ statement that you want to prove:

- $\forall n \in \mathbb{N}, \sum_{i=0}^n F(i) = F(n+2) - 1$.

S2. Say “we prove this by induction on” and state the induction parameter.

- We prove this by induction on $n$.





---

# Example with Template


S3. Prove the base case(s).

- $n=0$:
    - $F(0) = F(2) - 1$
    - $0 = 0$ $\square$
- $n = 1$:
    - $F(0) + F(1) = F(3) - 1$
    - $1 = 2 - 1$ $\square$
        




---

# Example with Template


S4. Write Induction Step.

- For a given $n > 1$,

S5. State the Induction Hypothesis (IH)

- I can assume for all $1 \leq k \leq n$ that $\sum_{i=0}^k F(i) = F(k+2) - 1$,

S6. State what you are going to prove about your specific value of $x$ that
was given to you in S4:

- and I want to prove $\sum_{i=0}^n F(i) = F(n+2) - 1$.



---

# Example with Template


S7. Do the proof for the specific $x$.



---

# Example with Template


S7. Do the proof for the specific $x$.

$| | $\textrm{Column 1}$ | $\textrm{Column 2}$ |
| --- | --- | --- | 

        1.$ | $\forall 1 \leq k \leq n, {} \sum_{i=0}^k F(i) = F(k+2) - 1$ | $\textrm{IH}$ |
        2.$ | $\textrm{Let } k = n - 1, \textrm{ then } \sum_{i=0}^{n-1} F(i) = F(n-1+2) - 1$ | $\textrm{Applied IH}$ |
        3.$ | $\sum_{i=0}^{n-1} F(i) = F(n+1) - 1$ | $\textrm{Rewrote Line 2}$ |
        4.$ | $\sum_{i=0}^{n-1} F(i) + F(n) = F(n+1) - 1 + F(n)$ | $\textrm{Added } F(n) \textrm{ to both sides.}$ |
        5.$ | $F(n+2) = F(n+1) + F(n)$ | $\textrm{Fibonacci Def.}$ |
        6.$ | $\sum_{i=0}^{n-1} F(i) + F(n) = F(n+2) - 1$ | $\textrm{Plugged 5. into 4.}$ |
        7.$ | $\sum_{i=0}^n F(i) = \sum_{i=0}^{n-1} F(i) + F(n)$ | $\textrm{Def. of Sum}$ |
        8.$ | $\sum_{i=0}^{n} F(i) = F(n+2) - 1$ | $\textrm{Plugged 7. into 6.} \square
    \end{array}$






---

# Example with Template


S8. Declare victory.

- Therefore, we have proved  $\forall n \in \mathbb{N}, F(0) + F(1) + F(2) + \ldots + F(n-1) + F(n) = F(n+2) - 1$.



 -->


---

# Tips for Proving Something by Induction 

<v-clicks>

- *Your Base Case, Inductive Hypothesis, and Inductive Step should be clear!*
- Your Inductive Hypothesis should be line 1 in the Inductive Step part of your proof.
- The recursive definition of any structures you're using (e.g. sum, factorial, exponents, etc.) should be the next lines of your Inductive Step.

</v-clicks>

---


# Finally... the Pigeonhole Principle

<div style="display:flex;gap:64px;align-items:center;">
    <div style="display:flex;flex-direction:column;gap:24px;max-width:820px;">
If you put more than n items into n boxes, some box gets at least two.

Obvious, but powerful. :)

It'll motivate a lemma we use frequently: <br> the Pumping Lemma.

  </div>
    <svg viewBox="0 0 320 200" style="width:280px;flex-shrink:0;">
      <rect x="10" y="60" width="80" height="80" rx="8" fill="#1A2740" stroke="#93A5BD" stroke-width="3"/>
      <rect x="120" y="60" width="80" height="80" rx="8" fill="#1A2740" stroke="#93A5BD" stroke-width="3"/>
      <rect x="230" y="60" width="80" height="80" rx="8" fill="#1B3350" stroke="#6CB6EA" stroke-width="3"/>
      <circle cx="35" cy="100" r="10" fill="#6CB6EA"/>
      <circle cx="145" cy="100" r="10" fill="#6CB6EA"/>
      <circle cx="255" cy="85" r="10" fill="#6CB6EA"/><circle cx="285" cy="115" r="10" fill="#6CB6EA"/>
    </svg>
  </div>
