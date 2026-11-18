---
# try also 'default' to start simple
theme: ./unc-cs
title: NP Completeness
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
duration: 75min
kicker: COMP 455 · Models of Languages and Computation
layout: cover
---

# NP Completeness

---

# Review: P and NP

<v-clicks>

* **P**: languages that can be *decided* in polynomial time.

* **NP**: languages that can be *verified* in polynomial time, given a *certificate* $c$.

    * Equivalently: decided by a *nondeterministic* polynomial time TM (guess a certificate, then check it).

* $\mathrm{P} \subseteq \mathrm{NP}$: a verifier can ignore $c$ and just run the decider.

* Whether $\mathrm{P} = \mathrm{NP}$ is an **open question**.

* $\textit{CLIQUE}$ and $\textit{SUBSETSUM}$ are in NP, but nobody knows if they're in P.

</v-clicks>

---

# Today's Question

<v-clicks>

Among all the problems in NP, are some *harder* than others?

To compare how hard problems are, we'll use **reductions** again.

We'll see that some problems in NP are as hard as **every** problem in NP.

</v-clicks>

---

# Review: Turing vs. Mapping Reductions

<v-clicks>

**Turing reduction** ($A \leq_\textrm{T} B$): "I can use a decider for $B$ to decide $A$."

* Use the decider for $B$ as many times as you like, and do anything with its answers.

**Mapping reduction** ($A \leq_\textrm{m} B$): "I can map any input for $A$ to an input for $B$ with the same answer."

* A computable function $f$ where, for every $w$, $\quad w \in A \iff f(w) \in B$.

**Analogy:**
* Turing: an expert on speed dial. Call as often as you like and interpret what they say.
* Mapping: translate your question into the expert's language, ask **once**, and repeat their answer word for word.

</v-clicks>

---

# Mapping Reductions

<img src="/mapping-reduction.png" width="520" class="mx-auto" alt="Diagram of a mapping reduction: an arrow labeled w, an input for A, goes into a box labeled mapping reduction f, and an arrow labeled f of w, an input for B, comes out"/>

$f$ transforms each input $w$ for $A$ into an input $f(w)$ for $B$, so that $w \in A \iff f(w) \in B$.

---

# Using a Mapping Reduction to Build a Decider

<img src="/turing-mapping-reduction.png" width="620" class="mx-auto" alt="Diagram of a decider for A built from a mapping reduction. Inside a large box labeled decider for A, the input w goes into the mapping reduction f, f of w goes into a decider for B, and the decider for B's accept and reject arrows lead directly out of the decider for A"/>

<v-click>

The decider for $B$ is called **once**, and its answer is passed through **unchanged**.

</v-click>

---

# Turing Reductions

<img src="/turing-reduction.png" width="620" class="mx-auto" alt="Diagram of a Turing reduction. Inside a large box labeled decider for A, the input w goes through a step that creates an input for a decider for B. The decider for B's output goes through a step that interprets the information from B, with a loop back that may query B again with a new input, before the decider for A accepts or rejects"/>

<v-click>

A mapping reduction is the **special case**: compute $f(w)$, query $B$ once, and pass the answer through.

</v-click>

---

# Where the Difference Matters

Recall: $A_{\textrm{TM}}$ is recognizable but undecidable, and $\overline{A_{\textrm{TM}}}$ is **not** recognizable.

<v-clicks>

* $\overline{A_{\textrm{TM}}} \leq_\textrm{T} A_{\textrm{TM}}$: if we had a decider for $A_{\textrm{TM}}$, run it on $\langle M, w \rangle$ and **flip** its answer.

    * We'll see this same flipping trick in the next example!

* But $\overline{A_{\textrm{TM}}} \not\leq_\textrm{m} A_{\textrm{TM}}$.

    * If a mapping reduction existed, $\overline{A_{\textrm{TM}}}$ would be recognizable, since $A_{\textrm{TM}}$ is. It isn't!

</v-clicks>

---

# One Problem, Reduced Both Ways

Your first LN! 

---

# Same Problem, Different Approaches

<v-clicks>

Both reductions work, but in different ways:

* **Turing:** asks $\textit{EVEN}$ about the **same** input $w$, but gives the **opposite** answer.

* **Mapping:** asks $\textit{EVEN}$ about a **different** input, $w0$, and gives the **same** answer.

</v-clicks>

---

# Activity: Comparing the Two

Fill in the table. The first row is done for you!

| | Turing ($A \leq_\textrm{T} B$) | Mapping ($A \leq_\textrm{m} B$) |
|---|---|---|
| What you build | A decider for $A$ that uses a decider for $B$ | A computable function $f$ |
| Calls to the decider for $B$ | <span v-click>As many as you want</span> | <span v-click>Exactly one, on $f(w)$</span> |
| Is the answer for $w$ the same as $B$'s answer? | <span v-click>Not necessarily</span> | <span v-click>Always: $w \in A \iff f(w) \in B$</span> |
| If $B$ is decidable, is $A$? | <span v-click>Yes</span> | <span v-click>Yes</span> |
| If $B$ is Turing-recognizable, is $A$? | <span v-click>Not necessarily</span> | <span v-click>Yes</span> |
| Used to define $\leq_\textrm{P}$? | <span v-click>No</span> | <span v-click>Yes (with $f$ computable in polynomial time)</span> |

---

# Connecting the Rows

<v-clicks>

Two rows of the table are connected:

* A Turing reduction doesn't have to give $B$'s answer, so it can **flip** it.

    * That's how $\overline{A_{\textrm{TM}}} \leq_\textrm{T} A_{\textrm{TM}}$, even though $A_{\textrm{TM}}$ is recognizable and $\overline{A_{\textrm{TM}}}$ is not.

* A mapping reduction always gives $B$'s answer, so it carries **recognizability** from $B$ over to $A$.

    * That's exactly why no mapping reduction from $\overline{A_{\textrm{TM}}}$ to $A_{\textrm{TM}}$ can exist.

So the two kinds of reduction really are different: giving the opposite of $B$'s answer is allowed in one but not the other, and that changes what we can conclude.

In this lecture, all reductions will be **mapping reductions** (we'll see why when we define NP-hard), with one extra requirement: $f$ must be computable **quickly**.

</v-clicks>

---

# Quick Check: Allowed in a Mapping Reduction?

1. Rewriting the input $w$ before asking about $B$. 

2. Asking the decider for $B$ about two different strings. 

3. Flipping the answer of the decider for $B$. 

4. Using a function $f$ that loops forever on some inputs. 

5. Using a function $f$ that always halts, but takes exponential time. 

---

# Polynomial Time Reducibility

<v-clicks>

A function $f: \Sigma^* \to \Sigma^*$ is a *polynomial time computable function* if some polynomial time Turing machine $M$ exists that halts with just $f(w)$ on its tape, when started on any input $w$.

Language $A$ is *polynomial time (mapping) reducible* to language $B$, written $A \leq_\textrm{P} B$, if a polynomial time computable function $f: \Sigma^* \to \Sigma^*$ exists, where for every $w$,

$$w \in A \iff f(w) \in B.$$

The function $f$ is called the *polynomial time reduction* of $A$ to $B$.

Think of $A \leq_\textrm{P} B$ as: "$A$ is **no harder** than $B$" (up to a polynomial amount of extra work).

</v-clicks>

---

# Reducibility and Membership in P

**Theorem:** If $A \leq_\textrm{P} B$ and $B \in \mathrm{P}$, then $A \in \mathrm{P}$.

<v-clicks>

**Proof?** Let $M$ decide $B$ in polynomial time, and let $f$ be the polynomial time reduction.

$N =$ "On input $w$:
1. Compute $f(w)$.
2. Run $M$ on $f(w)$ and output whatever $M$ outputs."

**Correct:** $w \in A \iff f(w) \in B \iff M$ accepts $f(w)$.

**Polynomial time:**
* Step 1 is polynomial, so $f(w)$ is at most polynomially longer than $w$ (one symbol per step!).
* $M$ runs in time polynomial in $|f(w)|$, which is still polynomial in $|w|$.

</v-clicks>

---

# NP-Hard

<v-clicks>

Now we can make precise what it means to be one of the "hardest" problems.

A language $B$ is ***NP-hard*** if every $A$ in NP is polynomial time reducible to $B$.

In other words, an NP-hard problem is at least as hard as **every** problem in NP.

Note: an NP-hard problem doesn't have to be in NP itself!

</v-clicks>

---

# Why Mapping Reductions?

Notice: NP-hard is defined with polynomial time **mapping** reductions, not Turing reductions. Why?

<v-clicks>

Let $\overline{\textit{SAT}}$ be the set of Boolean formulas that are **not** satisfiable. (Coming soon: every problem in NP reduces to $\textit{SAT}$.)

A Turing reduction from $\textit{SAT}$ to $\overline{\textit{SAT}}$ is easy: ask whether the formula is **un**satisfiable, then flip.

If Turing reductions counted: every NP problem $\to \textit{SAT} \to \overline{\textit{SAT}}$, so $\overline{\textit{SAT}}$ would be "NP-hard", even though nobody knows if it's in NP!

* Certificate that a formula **is** satisfiable: easy (the assignment).
* Short certificate that **no** assignment works: not known!

Requiring one call, with $B$'s answer passed through unchanged, keeps NP-hard tied to NP.

</v-clicks>

---

# NP-Completeness

<v-clicks>

A language $B$ is ***NP-complete*** if it satisfies two conditions:

1. $B$ is in NP, and
2. $B$ is NP-hard (every $A$ in NP is polynomial time reducible to $B$).

The NP-complete problems are at the heart of the P vs NP question.

</v-clicks>

---

# NP-Completeness and P vs NP

**Theorem:** If $B$ is NP-complete and $B \in \mathrm{P}$, then $\mathrm{P} = \mathrm{NP}$.

<v-clicks>

**Proof?** We know $\mathrm{P} \subseteq \mathrm{NP}$. Let $A$ be any language in NP.

* $B$ is NP-complete, so $A \leq_\textrm{P} B$.
* $B \in \mathrm{P}$, so by the previous theorem, $A \in \mathrm{P}$.

So $\mathrm{NP} \subseteq \mathrm{P}$.

* To prove $\mathrm{P} = \mathrm{NP}$: find a polynomial time algorithm for **one** NP-complete problem.
* If $\mathrm{P} \neq \mathrm{NP}$: **no** NP-complete problem has a polynomial time algorithm.

</v-clicks>

---

# Finding More NP-Complete Problems

**Theorem:** If $B$ is NP-complete and $B \leq_\textrm{P} C$ for some $C$ in NP, then $C$ is NP-complete.

<v-clicks>

**Proof?** $C$ is in NP, so we just need $C$ to be NP-hard. Let $A$ be any language in NP.

* $A \leq_\textrm{P} B$ by some reduction $f$ (since $B$ is NP-complete).
* $B \leq_\textrm{P} C$ by some reduction $g$.

Then $g \circ f$ reduces $A$ to $C$:

$$w \in A \iff f(w) \in B \iff g(f(w)) \in C$$

$f(w)$ is only polynomially longer than $w$, so computing $g(f(w))$ is still polynomial. So $A \leq_\textrm{P} C$!

</v-clicks>

---

# Recipe: Proving $C$ is NP-Complete

<v-clicks>

1. Show $C \in \mathrm{NP}$ (e.g., with a polynomial time verifier).

2. Pick a language $B$ already known to be NP-complete.

3. Give a polynomial time reduction $f$ showing $B \leq_\textrm{P} C$:
    * describe how $f$ transforms an input for $B$ into an input for $C$,
    * prove $w \in B \iff f(w) \in C$ (**both directions!**), and
    * argue that $f$ runs in polynomial time.

**Careful with the direction!** Reduce the **known** NP-complete problem **to** the new problem.

</v-clicks>

---

# Activity: Which Direction?

Four students claim to have proved a new language $X$ is NP-complete. Which proofs are valid?

**Remember:** $A \leq_\textrm{P} B$ means "$B$ is at least as hard as $A$." To show $X$ is hard, $X$ goes on the **right**.


1. "I showed $\textit{3SAT} \leq_\textrm{P} X$."
2. "I showed $X$ is in NP and $X \leq_\textrm{P} \textit{3SAT}$." 
3. "I showed $X$ is in NP and $\textit{3SAT} \leq_\textrm{P} X$." 
4. "I showed $X \leq_\textrm{P} \textit{CLIQUE}$, and $\textit{CLIQUE}$ is NP-complete." 





---

# SAT

<v-clicks>

A Boolean formula $\phi$ is *satisfiable* if some assignment of $\texttt{True}$/$\texttt{False}$ values to its variables makes it evaluate to $\texttt{True}$.

* $p \land q$ is satisfiable: $p = q = \texttt{True}$.
* $p \land \neg p$ is **not** satisfiable: it's $\texttt{False}$ for every value of $p$.

$$\textit{SAT} = \{ \langle \phi \rangle \mid \phi \textrm{ is a satisfiable Boolean formula}\}$$

$\textit{SAT} \in \mathrm{NP}$: the certificate is a satisfying assignment. But trying every assignment takes $2^m$ rows for $m$ variables!

**Cook–Levin Theorem:** $\textit{SAT}$ is NP-complete. (Proved independently by Stephen Cook and Leonid Levin in the early 1970s.)

</v-clicks>

---

# 3SAT

<v-clicks>

* A *literal* is a variable or a negated variable: $x_1$ or $\neg x_1$.
* A *clause* is several literals combined with $\lor$'s: $(x_1 \lor x_2 \lor \neg x_3)$.
* A *cnf-formula* is made of clauses combined with $\land$'s:

$$(x_1 \lor x_2 \lor \neg x_3) \land (x_3 \lor x_5) \land (\neg x_1 \lor x_2)$$

* A *3cnf-formula* has **exactly three** literals in every clause:

$$(x_1 \lor x_2 \lor \neg x_3) \land (x_3 \lor x_5 \lor x_6) \land (\neg x_1 \lor x_2 \lor x_4)$$

$\textit{3SAT} = \{ \langle \phi \rangle \mid \phi \textrm{ is a satisfiable 3cnf-formula} \}$ is also NP-complete.

A 3cnf-formula is satisfied exactly when **every** clause has **at least one** true literal.

</v-clicks>

---

# Activity: Satisfy It by Hand

Find a satisfying assignment, or explain why there isn't one:

$$\phi_1 = (x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2 \lor x_3) \land (\neg x_1 \lor \neg x_2 \lor \neg x_3)$$

$$\phi_2 = (x_1 \lor x_1 \lor x_2) \land (\neg x_1 \lor \neg x_1 \lor x_2) \land (\neg x_2 \lor \neg x_2 \lor \neg x_2)$$




---

# Our First NP-Completeness Proof: CLIQUE

$\textit{CLIQUE} = \{\langle G, k \rangle \mid G \textrm{ is an undirected graph with a } k \textrm{-clique}\}$

$\textit{3SAT} = \{ \langle \phi \rangle \mid \phi \textrm{ is a satisfiable 3cnf-formula} \}$

<v-clicks>

Following our recipe:

1. $\textit{CLIQUE} \in \mathrm{NP}$: done last class!
2. Use $\textit{3SAT}$, which is NP-complete.
3. Show $\textit{3SAT} \leq_\textrm{P} \textit{CLIQUE}$.

Our plan: **describe** the reduction, **practice** running it, then **prove** it works.

</v-clicks>

---

# The Construction

Goal: on input $\langle \phi \rangle$, output $\langle G, k \rangle$ (in polynomial time) such that $\langle \phi \rangle \in \textit{3SAT} \iff \langle G, k \rangle \in \textit{CLIQUE}$.

$$\phi = (a_1 \lor b_1 \lor c_1) \land (a_2 \lor b_2 \lor c_2) \land \cdots \land (a_k \lor b_k \lor c_k)$$

<v-clicks>

To satisfy $\phi$: pick a true literal from **each** clause, and the picks can't contradict each other.

* Every literal becomes a node, grouped into $k$ **triples** (one per clause).
* Two nodes get an edge **unless**:
    * **(a)** they're in the same triple, or
    * **(b)** they're contradictory ($x$ and $\neg x$).
* Set $k$ = the number of clauses.

</v-clicks>

---

# As an Algorithm

$F =$ "On input $\langle \phi \rangle$, where $\phi$ is a 3cnf-formula with $k$ clauses,
1. Create a graph $G$ with one node for each literal in $\phi$, grouped into $k$ triples, one per clause.
2. For every pair of nodes, add an edge between them, unless **(a)** they are in the same triple or **(b)** they are contradictory.
3. Output $\langle G, k \rangle$."

<v-click>

Before we prove this works, let's **run it**!

</v-click>

---

# Activity: The Reduction in Action

$$\phi = (x_1 \lor x_2 \lor x_3) \land (\neg x_1 \lor \neg x_2 \lor x_3) \land (x_1 \lor \neg x_2 \lor \neg x_3)$$

With a partner:

1. Draw the nodes of $G$, grouped into triples.
2. Add the edges. How many are there?
3. What does $F$ output?
4. Find a 3-clique in $G$. Use it to write down a $\texttt{True}$/$\texttt{False}$ assignment, and check that it satisfies $\phi$.

---

<!-- # Solution: Building $G$

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**Nodes:** 9, one triple per clause.

**Edges:** 27 pairs between different triples, minus 6 contradictory pairs:
* C1–C2: $x_1/\neg x_1$, $x_2/\neg x_2$
* C1–C3: $x_2/\neg x_2$, $x_3/\neg x_3$
* C2–C3: $\neg x_1/x_1$, $x_3/\neg x_3$

That's $27 - 6 = 21$ edges.

**Output:** $\langle G, 3 \rangle$

</v-clicks>

</div>
<div>

<img src="/3sat-clique-graph.png" alt="The graph G built from phi. Nine nodes are arranged in three groups: clause 1's nodes x1, x2, x3 across the top; clause 2's nodes not x1, not x2, x3 down the left; and clause 3's nodes x1, not x2, not x3 down the right. There are 21 edges between nodes in different groups, and no edges within a group"/>

</div>
</div>

---

# Solution: Cliques and Assignments

<div class="grid grid-cols-2 gap-6">
<div>

<v-clicks>

**Clique → assignment:** $\{x_3, x_3, x_1\}$ (one from each clause) is a 3-clique.
Make them true: $x_1 = x_3 = \texttt{True}$, $x_2$ = anything. Every clause is satisfied!

**Assignment → clique:** $x_1 = \texttt{T}$, $x_2 = \texttt{F}$, $x_3 = \texttt{F}$ satisfies $\phi$.
Pick a true literal per clause: $x_1$, $\neg x_2$, $x_1$. That's a 3-clique (right)!

**Not one-to-one:** $G$ has 12 cliques, $\phi$ has 5 satisfying assignments. We only need: *some* clique $\iff$ *some* assignment.

</v-clicks>

</div>
<div>

<img src="/3sat-clique-answer.png" alt="The same graph with three nodes highlighted: x1 from clause 1, not x2 from clause 2, and x1 from clause 3. The three edges connecting them are drawn in red"/>

</div>
</div> -->


# Activity: An Unsatisfiable Formula

<!-- $$\psi = (x_1 \lor x_1 \lor x_1) \land (\neg x_1 \lor \neg x_1 \lor \neg x_1)$$

Run the reduction on $\psi$. What graph do you get? Does it have a 2-clique?

<v-clicks>

* 6 nodes: three $x_1$'s in one triple, three $\neg x_1$'s in the other.
* Every pair is either in the same triple **(a)** or contradictory **(b)**.
* So: **no edges at all**, and no 2-clique. That matches $\psi$ being unsatisfiable!

</v-clicks> -->

---

# Activity: Break the Reduction

Each part of the construction is there for a reason. For each change, find a formula where the reduction gives the **wrong** answer. (Hint: try $\psi$!)

1. Drop rule **(a)**: also add edges within a triple. 

2. Drop rule **(b)**: also add edges between contradictory nodes. 





---

# Theorem: CLIQUE is NP-Complete

$\textit{CLIQUE} \in \mathrm{NP}$ and $\textit{3SAT}$ is NP-complete, so we just need: $F$ is a polynomial time reduction.

<v-clicks>

**Correctness ($\Rightarrow$):** Suppose $\phi$ is satisfiable. Fix a satisfying assignment.

* Each clause has a true literal. Pick one per clause: $k$ nodes, one per triple.
* Different triples, so rule **(a)** doesn't remove their edges.
* Both true under the same assignment, so not contradictory, and rule **(b)** doesn't remove their edges.
* So the $k$ nodes form a $k$-clique.

</v-clicks>

---

# Theorem: CLIQUE is NP-Complete (continued)

<v-clicks>

**Correctness ($\Leftarrow$):** Suppose $G$ has a $k$-clique.

* No edges within a triple **(a)**, so the clique has **exactly one** node per triple.
* No edges between contradictory nodes **(b)**, so we can make every literal in the clique $\texttt{True}$ without conflicts.
* Every clause has a true literal, so $\phi$ is satisfied.

**Runtime:** Let $n = |\langle \phi \rangle|$.
* Step 1: $3k \leq n$ nodes, so $O(n)$.
* Step 2: fewer than $n^2$ pairs, each checked by comparing variable names in $O(n)$: $O(n^3)$.
* Step 3: write the output, polynomial size.

So $\textit{3SAT} \leq_\textrm{P} \textit{CLIQUE}$, and **CLIQUE is NP-complete!**

</v-clicks>