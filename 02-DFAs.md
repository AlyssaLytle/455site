---
# try also 'default' to start simple
theme: ./unc-cs
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: DFAs
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
kicker: COMP 455 · Models of Languages and Computation
layout: cover
---

<!-- NOTE: Add starting slides from NFA to this one! -->

<!-- pandoc -t slidy -s notes/01-fa.md -o slides/03-finite-automata.html --webtex -->
<!-- pandoc -s notes/01-fa.md -o pdfs/03-finite-automata.tex -->

# Finite Automata and Regular Languages


UNC-Chapel Hill, Fall 2026


---

# Finite Automaton: An Example

Our example: an automatic door


<img src="/public/auto-door.png" width="400"/>

Front pad: detect person to walk through

Rear pad: Confirm person has passed through, don't hit other person standing there




---

# Rules of Operation

|        | Front | Rear | Both | Neither |
| --- | :---: | :---: | :---: | :---: |
| **Closed** | <span v-click="1">Open</span> | <span v-click="2">Closed</span>  | <span v-click="3">Closed</span>  | <span v-click="4">Closed</span>  |
| **Open** | <span v-click="5">Open</span>  | <span v-click="6">Open</span>  | <span v-click="7">Open</span>  | <span v-click="8">Closed</span>  |


<div v-click="9">

This is called a **state transition table**.

**Closed** and **Open** are *states*. 

They take Front, Rear, Both, and Neither as *inputs* to tell them what next-state to transition to.
</div>



<!-- # State Diagram

 <img src="/public/auto-door.png" width="400"/> 



This is called a state diagram.



--- -->

---
layout: section

---

# Formal Definition of a DFA

---

# Formal Definition



A finite automaton can be expressed as 5-tuple $(Q, \Sigma, \delta, s, F)$ where:

<v-clicks>

- $Q$: A finite set of states 
- $\Sigma$: A finite alphabet
- $\delta: Q \times \Sigma \to Q$: A transition function
- $s \in Q$: A start state
- $F \subseteq Q$: A set of accept states

</v-clicks>




---



# Back to Our Door Example...


- $Q: \{Open, Closed\}$ 
- $\Sigma: \{Front, Rear, Both, Neither\}$
- $\delta: Q \times \Sigma \to Q: \textrm{Our transition table}$
- $s \in Q: Closed$
- $F \subseteq Q: \{Open, Closed\}$




<v-clicks>

In the transition table, denote a start state with $\rightarrow$ and accept states with $*$.


|        | Front | Rear | Both | Neither |
| --- | :---: | :---: | :---: | :---: |
| $\rightarrow$ **Closed** $*$ | Open | Closed | Closed | Closed |
| **Open** $*$| Open | Open | Open | Closed |

</v-clicks>





---



# Getting More Comfortable with $\delta$...





- $\delta: Q \times \Sigma \to Q: \textrm{Our transition table}$





|        | Front | Rear | Both | Neither |
| --- | :---: | :---: | :---: | :---: |
| $\rightarrow$ **Closed** $*$ | Open | Closed | Closed | Closed |
| **Open** $*$| Open | Open | Open | Closed |




<div class="pt-10">
<v-clicks>

- $\delta$ maps from one state + input to a new state.
- $\delta(Closed, Rear) = Closed$ 
- $\delta(Open, Front) = Open$
- $\delta(Open, Neither) = Closed$

</v-clicks>
</div>

---

# State Diagrams

A state diagram can be used as an alternative to a transition table to represent a finite automaton.

![](/public/formal-door.png)

- $Q: \{Open, Closed\}$ 
- $\Sigma: \{Front, Rear, Both, Neither\}$
- $\delta: Q \times \Sigma \to Q: \textrm{Shown in state diagram}$
- $s \in Q: Closed$
- $F \subseteq Q: \{Open, Closed\}$



---
layout: section

---

#  Languages

---

# The Language of the Machine

For our machine $M$,
The *language* of our machine $L(M)$ is the set of all string inputs that $M$ accepts... 


![](/public/formal-door.png)



E.g. $\{\epsilon, Front, FrontRear, FrontRearFront, RearBoth, ...\}$

$M$ accepts or *recognizes* a string if it terminates in an accept state.

(This isn't the best example because this door accepts all input strings, so let's try another one!)

---
layout: two-cols


---

::title::

# Another Example

::left::

Let $M$ be:

<img src="/public/fa.png" width="400"/>

::right::

What are $(Q, \Sigma, \delta,s, F)$?

<!-- <v-clicks>

- $Q: \{q_1, q_2\}$ 
- $\Sigma: \{0, 1\}$
- $\delta: Q \times \Sigma \to Q: \textrm{Shown in state diagram}$
- $s: q_1$
- $F: \{q_2\}$

</v-clicks> -->



---
layout: two-cols


---
::title::
# Finding the Language of $M$


::left::
Let $M$ be:

<img src="/public/fa.png" width="400"/>


What is $L(M)$?

::right::


Let's consider which possible input strings end in an accept state...

<v-clicks>

- $0$ - No
- $1$ - Yes
- $01$ - Yes
- $00$ - No
- $010$ - No
- $011$ - Yes
- $0111$ - Yes



</v-clicks>

<div v-click="8">

$L(M)$ is the set of all strings that end with $1$!
</div>

<div v-click="9">

$L(M) = \{w ~|~ w \textbf{ ends with } 1\}$ 
</div> 




---

# A Regular Language

A language is a *regular language* if there exists a finite automaton that recognizes it.

<v-clicks>
Example:

We now know $L(M) = \{w ~|~ w \textbf{ ends with } 1\}$ is a regular language!
</v-clicks>





---
layout: section

---

# Practice

---

# Practice 

Let 

$$ L = \{w | w \textrm{ is of even length and begins with } 01 \}$$

Prove $L$ is a regular language.

---

<!-- # Practice

Let us design a DFA to accept the language:

$$ L = \{w | w \textrm{ is of even length and begins with } 01 \}$$

What we need to track:

* Whether it starts with 01
* Whether the input length is even

--- -->



# Gumball Machine Problem

Design a DFA that represents a gumball machine with the following properties:

* It takes nickels and dimes as inputs
* If it receives 15 cents total, it dispenses a gumball
* If it receives more than 15 cents, it dispenses a gumball and change


Think of an "accept" state as one where a gumball is dispensed.

(It's ok if your solution doesn't look quite like your neighbor's! There are multiple correct answers! We're going to compare!)

---

# Gumball Machine Solutions

--- 
layout: section
---

# Formally Defining Acceptance


---




# Formal Definition of Acceptance

Other ways to describe acceptance of string $x$:

* "String $x$ is recognized by this automaton". 
* "String $x$ is a member of the language generated by this automaton."

Acceptance means that the DFA ends in an accept state, so we can say:

Let $M = (Q, \Sigma, \delta,s, F)$ 

Let $w = w_1w_2\ldots w_n$ be a string where each $w_i$ is a member of the alphabet $\Sigma$

$M$ accepts $w$ if there exists a sequence of *states* $r_1, r_2, \ldots, r_n$ such that:

<v-clicks>

1. $r_0 = s$
2. $\delta(r_i,w_{i+1})= r_{i+1}$ for $i = 0,\ldots,n-1$, and
3. $r_n \in F$

</v-clicks>

---

# Another Formal Definition of Acceptance


We've so far discussed $\delta$ in terms of

- $\delta: Q \times \Sigma \to Q$

In other words $\delta$ is handling state transitions given a single input from $\Sigma$.

What if we wanted to discuss *strings* of input?

---

# Extending the Transition Function to Strings


$$\hat{\delta}: Q \times \Sigma^* \to Q$$

## Formal Definition

Let $w$ be a string of the form $xa$; 

That is $w= xa$, where $x$ is a string and $a$ is a symbol.

Then 

$$\hat{\delta}(q,w) = \delta(\hat{\delta}(q,x),a)$$


<v-clicks>

**Base case:**

$$\hat{\delta}(q,\epsilon) = q$$

</v-clicks>



---
layout: two-cols 

---

::title::

# Practice

::left::

<img src="/public/fa.png" width="300"/>

$L(M) = \{w ~|~ w \textbf{ ends with } 1\}$ 

::right::

<v-clicks>

$$ {1|2|3|4|5|6|7|8|all}
\begin{aligned}
\hat{\delta}(q_1, 0101) 
&= \delta(\hat{\delta}(q_1,010),1)\\
&= \delta(\delta(\hat{\delta}(q_1,01),0),1)\\
&= \delta(\delta(\delta(\hat{\delta}(q_1,0),1),0),1)\\
&= \delta(\delta(\delta(\delta(\hat{\delta}(q_1,\epsilon),0),1),0),1)\\
&= \delta(\delta(\delta(\delta(q_1,0),1),0),1)\\
&= \delta(\delta(\delta(q_1,1),0),1)\\
&= \delta(q_1,1)\\
&= q_2\\
\end{aligned} $$

</v-clicks>

---

# Acceptance Redefined

<v-clicks>

Now we can use $\hat{\delta}$ to define acceptance to a language!

For automaton $M = (Q, \Sigma, \delta, s, F)$, 

$x \in L(M)$ iff $\hat{\delta}(s,x) \in F$.

</v-clicks>

---
layout: section

---

# Proving Properties About Automata 

---

# Proving Properties About Automata 

## Want to Prove (WTP):

Assume $A$ and $B$ are regular languages. Then $A \cap B$ is also regular.

---

# Proving Properties About Automata 

## Want to Prove (WTP):

Assume $A$ and $B$ are regular languages. Then $A \cap B$ is also regular.

If $A$ and $B$ are regular, then there exist automata

$M_1 = (Q_1, \Sigma, \delta_1, s_1, F_1)$

$M_2 = (Q_2, \Sigma, \delta_2, s_2, F_2)$

With $L(M_1) = A$ and $L(M_2) = B$.

To prove $A \cap B$ is regular, we need to build an automaton for it!

*It's a proof by construction!*

---

# Proof by Construction

Has two main elements:

1. The construction
2. Proof that the construction satisfies the claim

---

# Proof by Construction

Has two main elements:

1. Construction of automaton $M_3$ 
2. Proof that $L(M_3) = L(M_1) \cap L(M_2)$

---

# Construction of $M_3$

* $L(M_1) = A$ and $L(M_2) = B$.
* $M_1 = (Q_1, \Sigma, \delta_1, s_1, F_1)$
* $M_2 = (Q_2, \Sigma, \delta_2, s_2, F_2)$


Let $M_3 = (Q_3, \Sigma, \delta_3, s_3, F_3)$

with 

---

# Proof that $L(M_3) = L(M_1) \cap L(M_2)$

We're going to work with this assumption: 

## Lemma A

For all $x \in \Sigma^*$, $\hat{\delta_3}((p,q),x) = (\hat{\delta_1}(p,x),\hat{\delta_2}(q,x))$.


---

# Proof that $L(M_3) = L(M_1) \cap L(M_2)$

## Our Toolbox (What We Know)

* $L(M_1) = A$ and $L(M_2) = B$.
* $M_1 = (Q_1, \Sigma, \delta_1, s_1, F_1)$
* $M_2 = (Q_2, \Sigma, \delta_2, s_2, F_2)$
* Our Construction of $M_3= (Q_3, \Sigma, \delta_3, s_3, F_3)$
    * $Q_3 = Q_1 \times Q_2 = \{(p,q) \mid p \in Q_1, q \in Q_2 \}$
    * $\delta_3((p,q),d) = (\delta_1(p,d), \delta_2(q,d))$
    * $s_3 = (s_1,s_2)$
    * $F_3 = F_1 \times F_2$
* Lemma A: $\hat{\delta_3}((p,q),x) = (\hat{\delta_1}(p,x),\hat{\delta_2}(q,x))$.

---