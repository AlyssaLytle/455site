---
# try also 'default' to start simple
theme: ./unc-cs
title: Undecidability
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

# Undecidability + Disproving the Entscheidungsproblem


---

# Overview

<v-clicks>

* Introduce the idea of **undecidability**
* Revisit Hilbert's *Entscheidungsproblem* (The Decision Problem)
* Show how Alan Turing used the Turing Machine + undecidability to answer Hilbert's question with a definitive **no**

</v-clicks>

---

# Review: Decidability

For a language $L$ on machine $M$,

<v-clicks>

$L$ is **Turing-recognizable** iff $M$

* Accepts if the input is in $L$
* Rejects *or* loops forever if the input is not in $L$

$L$ is **Turing-decidable** iff $M$

* Accepts if the input is in $L$
* Rejects if the input is not in $L$

</v-clicks>

---

# Review: Algorithms

To express an algorithm using a Turing machine, we:

<v-clicks>

1. Represent the problem as a set/language (using string encoding $\langle A \rangle$).
2. Define a Turing Machine that *decides* it.

When writing an algorithm, make sure it answers:

* What is the input?
* What are we reading from / writing to the tape?
* What are the accept and reject conditions?

</v-clicks>

---

# Review: Known Decidable Problems

<v-clicks>

Last class, we showed that the following *acceptance* problems are **decidable**:

* $A_{DFA} = \{ \langle B, w\rangle \mid B \text{ is a DFA that accepts } w \}$
* $A_{NFA} = \{ \langle B, w\rangle \mid B \text{ is an NFA that accepts } w \}$
* $A_{REX} = \{ \langle B, w\rangle \mid B \text{ is a regex that generates } w \}$

In each case: *simulate* the given machine on $w$.

</v-clicks>

<v-click>

**What about $A_{TM}$?**

$A_{TM} = \{\langle M, w\rangle \mid M \text{ is a TM and accepts } w\}$

</v-click>

---


# Undecidability

<v-clicks>

There exist well-defined, mathematically precise, yes/no questions for which **no Turing machine can always produce the correct answer in finite time**.

We call such problems **undecidable**.

</v-clicks>

<v-click>

A fundamental limit on what mechanical computation can do — and it applies to problems that seem deceptively simple.

</v-click>


---


# Recall: The Entscheidungsproblem

<v-clicks>

**Hilbert, 1928:** Given any statement $\varphi$ of first-order logic, is there a step-by-step procedure that decides, in finitely many steps, whether $\varphi$ is provable?

**Gödel, 1931:** Incompleteness — some truths are *unprovable*. But: maybe there's still an algorithm that tells us whether a given statement has a proof.

**Church, early 1936:** Answered the question *no* (via $\lambda$-calculus) just months before Turing.

Turing's version is more *tangible*: it defines a clear, understandable mechanical procedure. That tangibility helped the result land.

</v-clicks>

---

# The Three Steps

<v-clicks>

**Step 1:** Define a "Mechanical Procedure"

**Step 2:** Find a Problem Turing Machines Can't Solve (Undecidable = Unsolvable)

**Step 3:** Use this Unsolvable Problem to Disprove the Entscheidungsproblem

</v-clicks>

<v-click>

Today, we focus mostly on **Step 2**.

</v-click>

---

# Step 1: Define a "Mechanical Procedure"

<v-clicks>

✓ **Already done!**

* The Turing Machine (design + formal definition)
* The notion of an algorithm (input / tape / accept-reject)

Via the **Church–Turing Thesis**: mechanical procedure = Turing-computable.

</v-clicks>

---


# Step 2: Find a Problem Turing Machines Can't Solve



## A Historical Sidebar

<v-clicks>

Three closely related problems:

* $A_{TM} = \{\langle M, w\rangle \mid M \text{ accepts } w\}$ — the **acceptance problem**
* $HALT_{TM} = \{\langle M, w\rangle \mid M \text{ halts on } w\}$ — the **halting problem**
* $PRINT_{TM} = \{\langle M, w, s\rangle \mid M \text{ eventually prints } s \text{ on } w\}$ — the **printing problem**

All three are **equi-undecidable** — proving one is undecidable proves the rest are also undecidable.

Today, we will focus on the proof for $A_{TM}$

</v-clicks>

---

# Setting Up the Proof

<v-clicks>

We prove $A_{TM}$ is undecidable by **contradiction**.

**Assume** $A_{TM}$ *is* decidable.

Then there exists a Turing Machine $H$ that takes $\langle M, w\rangle$ as input and:

$$ H(\langle M, w\rangle) = \begin{cases} \text{accept} & \text{if } M \text{ accepts } w \\ \text{reject} & \text{if } M \text{ rejects or loops on } w \end{cases} $$

$H$ must always halt.

</v-clicks>


---

# Approach 1

## The "Troublemaker Machine" $D$


---

# Approach 2

## The Diagonal Table



---

# The Contradiction

<v-clicks>

Every TM appears somewhere on this table — including $\overline{M_{diag}}$.

Eventually $\overline{M_{diag}}$ hits the diagonal.

At that cell, its value must be *opposite* of the diagonal...

...but it also *is* the diagonal.

**Contradiction!**

</v-clicks>


---

# Step 3: Use $A_{TM}$ to Disprove the Entscheidungsproblem


## What is a Reduction?

<v-clicks>

A **reduction** is a way of using a solution to one problem to solve another.

If I can turn problem $A$ into problem $B$, and I can solve $B$, then I can solve $A$.

"$A$ reduces to $B$."

**If $B$ is solvable, so is $A$.**

Contrapositive: **If $A$ is *unsolvable*, then $B$ must also be unsolvable.**

This is the logic Turing uses.


$A_{TM}$ can be reduced to the Entscheidungsproblem, and therefore the Entscheidungsproblem is also undecidable.


</v-clicks>


<!-- ---

# Turing's Reduction

<v-clicks>

Given a Turing machine $M$ and input $w$, Turing constructs a first-order sentence $\varphi_{M,w}$ such that:

$$\varphi_{M,w} \text{ is provable} \iff M \text{ accepts } w$$

So: if we could decide provability, we could decide $A_{TM}$.

But $A_{TM}$ is undecidable.

**Therefore, the Entscheidungsproblem is undecidable.** ∎

</v-clicks> -->

---

# What We've Shown

<v-clicks>

* **Step 1:** Turing Machine = formal model of mechanical procedure.
* **Step 2:** $A_{TM}$ is undecidable (via diagonalization).
* **Step 3:** $A_{TM}$ reduces to the Entscheidungsproblem.

**Conclusion:** No mechanical procedure decides the Entscheidungsproblem.

Hilbert's question: answered — **no**.

</v-clicks>


