---
# try also 'default' to start simple
theme: ./unc-cs
title: Turing Machines
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

# Turing Machines

Alyssa Lytle 
---

# Turing Machines

<img src="/public/comp-hierarchy.png" width="500"/>

The final and *most powerful* computational model we will discuss

---

# Review



<v-clicks>
 
The Turing Machine is named after Alan Turing, who invented them in 1936. 

Still used as the standard for what it means for a function to be "computable".

There are multiple other "computationally equivalent" formalisms that have been developed to represent computability:

* Post systems
* $\mu$-recursive functions
* $\lambda$-calculus
* combinatory logic
* modern programming languages (e.g. C)


Defining computability in terms of a problem solvable by a Turing Machine: The **Church-Turing Thesis**.

</v-clicks>

---

# Turing Machines: General Design

<img src="/public/turing-scheme.png" width="400"/>

<v-clicks>

* Initially, tape contains only the input string (blank otherwise)
* The tape is considered *infinite*
* The machine can read *+ write* information on the tape
* The tape head can move *left or right*
* The machine behaves deterministically. 
* Machine continues until it reaches an *accept* or *reject* state
* We assume all transitions are "defined". (If a transition is not explicitly stated, that means we transition to a "reject" state.)
</v-clicks>

---

# Comparing Models of Computation

<img src="/public/comp-models.png" width="800"/>


---

# Tuple Definition

A *Turing machine* is a 7-tuple, $(Q, \Sigma, \Gamma, \delta, s, q_{accept}, q_{reject})$

<v-clicks>

* $Q$ is the set of states
* $\Sigma$ is the input alphabet (not containing the *blank symbol* $\sqcup$)
* $\Gamma$ is the tape alphabet, where $\sqcup \in \Gamma$ and $\Sigma \subseteq \Gamma$
* $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L,R\}$ is the transition function
* $s \in Q$ is the start state
* $q_{accept} \in Q$ is the accept state
* $q_{reject} \in Q$ is the reject state
</v-clicks>

---

# Variants of Turing Machines

* There are many variants of Turing machines, including versions with multiple tapes and/or nondeterminism. 

* These variants all have the same power as the model described in this lesson, in the sense that all of them recognize the same class of languages.



---

# Example: 

Let's define a Turing Machine that recognizes $A = \{0^{2^n}| n \geq 0\}$, the language containing all strings of $0$s that have length of $2^n$.

The basic idea is to repeatedly "divide" the input in half, hopefully finally getting to an input of length $1$.

Steps:

<v-clicks>

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

</v-clicks>

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/start.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/s1.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/s2.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/s3.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/s4.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/s5.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---
layout: two-cols-header

---

# $0^{2n}$

::right::

<img src="/public/tm-ex1/fn.png" width="600"/>

::left::

1. If the tape contains a single $0$, accept.
2. Move left to right across the tape, crossing off every other 0.
3. If the tape contains an odd number of $0$s, reject. 
4. Return the tape head to the left-hand end of the tape and repeat the previous steps.

---

<!-- # Another Example:

Let's define a Turing Machine that recognizes $B  = \{w\#w \mid w \in \{0,1\}^*\}$.

The basic idea is to "jump" to the corresponsing locations for each character in $w$ on either side of the $\#$ symbol.

Steps:

<v-clicks>

1. Move accross the tape to corresponding positions on either side of the $\#$ symbol. 
    * If both positions contain the same symbol, cross off the symbols.
    * If both positions do *not* contain the same symbol, reject.
2. Repeat until all symbols to the left of $\#$ have been crossed off. After that:
    * If there are any remaining symbols to the right of $\#$, reject
    * Else, accept

</v-clicks>

---

# $w\#w$

<img src="/public/ww-tm.png" width="550"/>



--- -->

# Defining Acceptance: Configurations

<v-clicks>

The *configuration* of the Turing Machine is the current state, tape contents, and head location.

It is represented as $u q v$ where $q$ is the current state and $uv$ are the current contents of the tape, with the first character of $v$ being the current head location.

The *start configuration* on input $w$ would be $sw$.

The *accepting configuration* is the configuration that contains the state $q_{accept}$ 

and the *rejecting configuration* is the configuration that contains the state $q_{reject}$

A Turing machine $M$ *accepts* input $w$ if there are a sequence of configurations that begin at the start configurations and finish in an accepting configuration.

</v-clicks>

---

# Languages and Recognizability

<v-clicks>

We call a language *Turing-recognizable* if some Turing Machine recognizes it.

Turing Machine $M$ recognizes language $L$: 

$M$ accepts $w$ $\iff$ $w \in L$

What if $w$ is *not* in $L$? What must be true?

Acceptance = Finish in an accept state

Non-Acceptance = ?



</v-clicks>

---

