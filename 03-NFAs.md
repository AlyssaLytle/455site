---
# try also 'default' to start simple
theme: seriph
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
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min
---

<!-- pandoc -t slidy -s notes/02-fa-prac.md -o slides/04-dfa-practice.html --webtex -->


<!-- pandoc -s notes/02-fa-prac.md -o slides/04-dfa-practice.html -->

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
- <span v-mark.line.green>$\Delta$: a function $Q \times \Sigma \to 2^Q$</span>
- <span v-mark.line.green>$S \subseteq Q$: A *set* of start states</span>
- $F \subseteq Q$: A set of accept states

Where $2^Q$ is the *power set* of $Q$. ($\{A \mid A \subseteq Q\}$)


---

# Example

Draw an NFA over the alphabet $\{a,b\}$ such that it accepts:

$$A = \{w \in \{a,b\}^* \mid \textrm{the last symbol is } a \}$$

E.g. it accepts $ababba$ and $aaa$ but not $aab$ or $babab$.

<v-clicks>

<img src="/public/nfa-lc-a.png" width="300"/>

</v-clicks>

--- 
layout: two-cols 


---

# Undefined/ Multiple Transitions

<img src="/public/nfa-lc-a.png" width="300"/>


<v-clicks>

As shown in this example, NFAs can contain transition to a *set* of possible next-states over a single input!

Note how $\Delta(s,a) = \{s,q\}$

And NFAs don't *have* to have a transition defined for every state, input combination! 

Note how $\Delta(q,a)$ and $\Delta(q,b)$ are not defined!

</v-clicks>

::right::

<v-clicks>

How does that look in a transition table?


| | $a$| $b$ |
| --- | --- | --- |
| $\rightarrow s$  | $\{s,q\}$ | $\{s\}$ |
|$q^*$ | $\empty$ | $\empty$ |
</v-clicks>

<v-clicks>

Now let's think about how this works in terms of possible input strings...

</v-clicks>



---

# What does "acceptance" mean?

<!-- - "An NFA accepts a string $w$ if it is possible to make any sequence of choices of next state, while reading the characters of $w$, and go from the start state to any accepting state." - Hopcroft et al. [^hopcroft] -->

A nondeterministic automaton is said to *accept* its input $w$ if there exists *at least* one computation path on input $w$ from a start state to an accept state.

---
layout: two-cols

---

Computation on an NFA

<img src="/public/nfa-lc-a.png" width="300"/>

Two basic principles:

* A branching of computation paths occurs whenever there is more than one next-state in the transition.

* No defined transition for an input-state pair means that string is *not* accepted.


::right::



<v-clicks>

Consider the input string $ab$...

So we are computing $\hat{\Delta}(s,ab) = \Delta(\Delta(s,a),b)$

First let's consider $\Delta(s,a)$

$${1|1-2|1-3}
\begin{align*}
\Delta(s,a) &=\\
&\textrm{Computation Path 1: } s \\
&\textrm{Computation Path 2: } q \\
\end{align*}
$$

Now $\Delta(\Delta(s,a),b)$ must consider that branching...

$${1|1-2|1-3}
\begin{align*}
\Delta(\Delta(s,a),b) &=\\
&\textrm{Computation Path 1: } \Delta(s,b)  = s\\
&\textrm{Computation Path 2: } \Delta(q,b) \\
\end{align*}
$$

$\Delta(s,b) = s$ is not an accept state and $\Delta(q,b)$ is not defined, so we know the string $ab$ is *not* accepted.
</v-clicks>

---

# Another feature: Epsilon Transitions

* $\epsilon$-transitions can be useful in simplifying representation of a diagram. 

* Essentially, they give us transitions over *no* input (aka the empty string $\epsilon$)

* Note: Any NFA with $\epsilon$-transitions can be re-defined as an "equivalent" NFA *without* $\epsilon$-transitions.


<!-- * In this example, you'll see that they are helpful in handling the beginning and end of an input, which is where I intend to use them in this course. -->

---

# Another example 
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

</v-click>



---

# Some properties

* Every DFA can be expressed as an NFA. (Reasonable.)

* Every NFA can be expressed as a DFA. (A little more complicated to think about...)

---
layout: two-cols 

---

# Every DFA can be expressed as an NFA

Let's take an example DFA from a previous class...

$$A = \{w \in \{a,b\}^* \mid w \textrm{ has odd length} \}$$

<img src="/public/fa-odd-length.png" width="300"/>

The tuple representation would be 

$M = (Q_M, \Sigma, \delta_M, s_M, F_M)$.

::right::

<v-clicks>

So, for NFA $N = (Q_N, \Sigma, \Delta_N, S_N, F_M)$ we 

* $Q_N = Q_M$
* $\Delta_N:$ 

| | $a$| $b$ |
| --- | --- | --- |
| $\rightarrow s$  | $\{q\}$ | $\{q\}$ |
|$q^*$ | $\{s\}$ | $\{s\}$ |



* $S_N = \{s_M\}$

* $F_N = F_M$

If we wanted to rewrite this as an NFA $N$ with the same language, the tuple representation would change only slightly to account for the fact that an NFA has a *set* of start states and that $\Delta$ maps to a *set* of states.


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


