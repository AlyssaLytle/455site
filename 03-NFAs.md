---
# try also 'default' to start simple
theme: ./unc-cs
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: NFAs
info: |
  ## Slides for 455
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


# Deterministic vs. Nondeterministic Finite Automata 



---

# Nondeterministic Finite Automata

---

# Determinism

What is determinism?

"When a machine is in a given state and reads the next input symbol, we know what the next state will be--it is *determined*." - Sipser

---

# Nondeterminism

What is nondeterminism?

* "A state is not uniquely determined by its current state." - Kozen 

* "...the power to be in several states at once." - Hopcroft et al.

* "...several  choices may exist for the next state at any point." - Sipser 

---

# Why???

- Represents real-life situations where there's not enough/incomplete/unpredictable/unreliable information about external forces and how they impact the state.

- Can be a useful tool in computation. Some algorithms rely on nondeterminism for more efficient solutions.

- Nondeterministic definitions can be simpler/more concise.

---

# Nondeterministic Finite Automata

A Nondeterministic Finite Automaton (NFA) has a similar 5-tuple definition as the Deterministic Finite Automata (DFA) we've seen so far: $(Q, \Sigma, \delta, s, F)$, but some components are defined differently.

Thinking of our 5-tuple definition and the definition of nondeterminism, what components do you think are different?

---

# Nondeterministic Finite Automata

How does the Tuple definition change?

We still have:

<v-clicks>

- $Q$: A finite set of states 
- $\Sigma$: A finite alphabet
- $F \subseteq Q$: A set of accept states
</v-clicks>

But we now have

<v-clicks>

- a *set* of start states!

- $\delta$ can transition to a *set* of possible next-states! You also don't *have* to have a transition defined for every state, input combination! 
</v-clicks>

---

# Nondeterministic Finite Automata - Formal Definition

A *nondeterministic finite automaton* (NFA) is a five-tuple:

$$N = (Q, \Sigma, \Delta, S, F)$$ 

where

- $Q$: A finite set of states 
- $\Sigma$: A finite alphabet
- <span v-mark.line.green>$\Delta$: a function $Q \times \Sigma \to \mathcal{P}(Q)$</span> 
- <span v-mark.line.green>$S \subseteq Q$: A *set* of start states</span>
- $F \subseteq Q$: A set of accept states



---

# Example (LN1)

Let language $L$ be:

$$L = \{w \in \{0,1\}^* \mid \textrm{the last symbol is } 1 \}$$

* Draw a DFA that recognizes $L$
* Draw an NFA that recognizes $L$

--- 
layout: two-cols 


---

# Undefined/ Multiple Transitions

How does that look in a transition table?

<v-clicks>

As shown in our example, NFAs can contain transition to a *set* of possible next-states over a single input!


And NFAs don't *have* to have a transition defined for every state, input combination! 


</v-clicks>


::left::

<img src="/public/nfa-lc-1.png" width="300"/>

::right::


<div align="center">

| | $0$| $1$ |
| ---: | :---: | :---: |
| $\rightarrow s$  | $\{s\}$ | <span v-mark="{ at:1, color: 'yellow', type: 'box' }">  $\{s,q\}$ </span>|
|$q^*$ | <span v-mark="{ at:2, color: 'yellow', type: 'box' }">  $\empty$ </span> | <span v-mark="{ at:2, color: 'yellow', type: 'box' }">  $\empty$ </span> |

</div>



---

# Another feature: Epsilon Transitions

* $\varepsilon$-transitions can be useful in simplifying representation of a diagram. 

* Essentially, they give us transitions over *no* input (aka the empty string $\varepsilon$)

* Note: Any NFA with $\varepsilon$-transitions can be re-defined as an "equivalent" NFA *without* $\varepsilon$-transitions.

## What I Expect you to Know

The definition of an $\varepsilon$-transition and how to check a string for acceptance on an NFA containing $\varepsilon$-transitions.

## What I Don't Expect You to Know/Do

Define an NFA using $\varepsilon$-transitions, write out a computation trace for an NFA using $\varepsilon$-transitions, consider $\varepsilon$-transitions in your proofs.


<!-- * In this example, you'll see that they are helpful in handling the beginning and end of an input, which is where I intend to use them in this course. -->

---

# Another example 
Draw an NFA over the alphabet $\{a,b\}$ such that it accepts:

$$A = \{w \in \{a,b\}^* \mid w \textrm{ has } 2m \textrm{ or } 3m \textrm{ } a's \}$$



<!-- # Another example 
Draw an NFA over the alphabet $\{a,b\}$ such that it accepts:

$$A = \{w \in \{a,b\}^* \mid w \textrm{ has } 3m \textrm{ or } 4m \textrm{ } a's \}$$

## Without Epsilon Transitions

<v-click> 

<img src="/public/3m4m-no-epsilon.png" width="300"/>

</v-click>

---

# Another example 
Draw an NFA over the alphabet $\{a,b\}$ such that it accepts:

$$A = \{w \in \{a,b\}^* \mid w \textrm{ has } 3m \textrm{ or } 4m \textrm{ } a's \}$$

## With Epsilon Transitions

<v-click> 

<img src="/public/3m4m-epsilon.png" width="300"/>

</v-click> -->

---

# $\hat{\Delta}$

For a nondeterministic automaton $N = (Q, \Sigma, \Delta, S, F)$, $\Delta : Q \times \Sigma \to 2^Q$

  and $\hat{\Delta}$ is defined such that $\hat{\Delta} : 2^Q \times \Sigma^* \to 2^Q$

  and for $A \subseteq Q, a \in \Sigma, x \in \Sigma^*$

  ## Base Case:
    
<v-clicks>


  $$\hat{\Delta}(A, \varepsilon) = A $$
$$ \hat{\Delta}(A, a) = \bigcup_{q \in A}\Delta(q,a) $$

</v-clicks>

  ## Recursive Rule:

<v-clicks>

$$\hat{\Delta}(A, xa) = \bigcup_{q \in \hat{\Delta}(A,x)} \Delta(q,a) $$
</v-clicks>

--- 
layout: two-cols 
---

# Computation Paths

## On input 111

::left::

<div align="center">

| Computation Step | Number of Paths |
| :--: | :--:
| 0 | 1 | 

</div>

::right::

<div align="center">

### Possible States

<img src="/public/nfa-cpath/cpath1.png" width="270"/>

</div>


--- 
layout: two-cols 
---

# Computation Paths

## On input <span style="color: yellow;">1</span> 11

::left::

<div align="center">

| Computation Step | Number of Paths |
| :--: | :--:
| 0 | 1 | 
| 1 | 2 |

</div>

::right::

<div align="center">

### Possible States

<img src="/public/nfa-cpath/cpath2.png" width="270"/>

</div>

--- 
layout: two-cols 
---

# Computation Paths

## On input 1<span style="color: yellow;">1</span> 1

::left::

<div align="center">

| Computation Step | Number of Paths |
| :--: | :--:
| 0 | 1 | 
| 1 | 2 |
| 2 | 3 |


</div>

::right::

<div align="center">

### Possible States

<img src="/public/nfa-cpath/cpath3.png" width="270"/>

</div>


--- 
layout: two-cols 
---

# Computation Paths

## On input 11<span style="color: yellow;">1</span> 

::left::

<div align="center">

| Computation Step | Number of Paths |
| :--: | :--:
| 0 | 1 | 
| 1 | 2 |
| 2 | 3 |
| 3 | 4 |



</div>

<v-clicks>

Possible end states: $s$, $q$, $\empty$, $\empty$

Is the string $111$ accepted?

*Yes!* Because $q$ is an accept state!

</v-clicks>

::right::

<div align="center">

### Possible States

<img src="/public/nfa-cpath/cpath4.png" width="270"/>

</div>

---

# What does "acceptance" mean?

<!-- - "An NFA accepts a string $w$ if it is possible to make any sequence of choices of next state, while reading the characters of $w$, and go from the start state to any accepting state." - Hopcroft et al. [^hopcroft] -->

A nondeterministic automaton is said to *accept* its input $w$ if there exists *at least* one computation path on input $w$ from a start state to an accept state.

---
layout: two-cols

---



# Computation on an NFA

::left::



<img src="/public/nfa-lc-a.png" width="300"/>

Two basic principles:

* A branching of computation paths occurs whenever there is more than one next-state in the transition.

* No defined transition for an input-state pair means that string is *not* accepted.


::right::



<img src="/public/nfa-cpath/cpath4.png" width="300"/>




   




---

# Some properties

* Every DFA can be expressed as an NFA. (Reasonable.)

* Every NFA can be expressed as a DFA. (A little more complicated to think about...)

---
layout: two-cols 

---

# Every DFA can be expressed as an NFA

::left::

Let's take an example DFA from a previous class...

$$A = \{w \in \{0,1\}^* \mid w \textrm{ has odd length} \}$$

<img src="/public/fa-odd-length.png" width="300"/>

The tuple representation would be 

$M = (Q_M, \Sigma, \delta_M, s_M, F_M)$.

::right::

<v-clicks>

So, for NFA $N = (Q_N, \Sigma, \Delta_N, S_N, F_M)$ 

* $Q_N = Q_M$
* $\Delta_N:$ 

| | $0$| $1$ |
| --- | --- | --- |
| $\rightarrow q_0$  | $\{q_1\}$ | $\{q_1\}$ |
|$q_1^*$ | $\{q_0\}$ | $\{q_0\}$ |


* $S_N = \{q_0\}$

* $F_N = F_M$

The tuple representation changes only slightly because an NFA has a *set* of start states and $\Delta$ maps to a *set* of states.

</v-clicks>

---

# Every NFA can be expressed as an DFA

This is also a proof by construction!

## Basic Procedure ("Construction")

To convert NFA $N = (Q_N, \Sigma, \Delta_N, S_N, F_N)$ to DFA $M = (Q_M, \Sigma, \delta_M, s_M, F_M)$,

From a high-level: Set the states of $M$ to be the *powerset* of the states of $N$, and follow the rest of the construction logically from there.

Formally:

* $Q_M = 2^{Q_N}$
* $\delta_M(A,a) = \bigcup_{q \in A}\Delta_N(q,a)$
* $s_M = S_N$
* $F_M = \{A \subseteq Q_N | A \cap F_N \neq \emptyset\}$


