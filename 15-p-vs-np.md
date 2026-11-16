---
# try also 'default' to start simple
theme: ./unc-cs
title: P vs NP
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

<!-- pandoc -t slidy -s notes/13-p-vs-np.md -o slides/13-p-vs-np.html --webtex -->

# P vs NP

<!-- ---

# Question: 

What do you know about the "P vs. NP" problem? -->


---

# Warm-Up: Solve vs. Check

You have 60 seconds. No calculators!

<v-click>

$$391 = \;?\; \times \;?$$

</v-click>

<v-click>

Now a different question: is it true that $17 \times 23 = 391$?

</v-click>

<v-clicks>

*Finding* the factors is hard. *Checking* a proposed answer takes seconds.

* Modern cryptography (like RSA) relies on this gap: *finding* factors of huge numbers is slow, but *checking* them is fast.

* Today: a complexity class built around problems whose answers are easy to *check*.

</v-clicks>

---

# Recall

Let $t: \mathbb{N} \to \mathbb{R}^+$ be a function. Define the *time complexity class*, $\textrm{TIME}(t(n))$, to be the collection of all languages that are decidable by an $O(t(n))$ time Turing machine. 

P is the class of languages that are decidable in polynomial time on a deterministic single-tape Turing machine. 

In other words, 

$$\mathrm{P} = \bigcup_k \textrm{TIME}(n^k).$$ 

P is important because it roughly corresponds to the class of problems that are realistically solvable on a computer.

---

# Showing a Problem is in P

1. Express our problem as a language $A$
2. Present a Turing machine computable algorithm $M$ that decides $A$
3. Argue the runtime of $M$

---

# NP (+ Important Disclaimer)

<v-clicks>

So now, let's talk about the *other* problems... 

Big difference here: we're not trying to prove something is *not* in P. 

Rather, there are some problems we haven't been able to show are in P, but we still want to say something about them!

</v-clicks>

---

# NP

<v-clicks>

Let's talk about the "solvability" of a problem in a different way. 

Maybe we can't produce an algorithm that *decides* language $A$ in polynomial time, but perhaps we can produce an algorithm that *verifies* it in polynomial time.

In other words, if we have a little more information (a *certificate* $c$), we can check membership in $A$.

(Think of $A$ as the problem we're trying to solve, and think of $c$ as a possible solution.)

A *verifier* for a language $A$ is an algorithm $V$, where

$$A = \{w \mid V \textrm{ accepts } \langle w, c\rangle \textrm{ for some string } c \}$$

A *polynomial time verifier* runs in polynomial time in the length of $w$.

A language $A$ is *polynomially verifiable* if it has a polynomial time verifier.

</v-clicks>
    
---

# Example: PATH

<v-clicks>

Recall 

$$\textit{PATH} = \{\langle G, s, t \rangle \mid G \textrm{ is a directed graph that has a directed path from } s \textrm{ to } t \}$$

We showed that we could build a machine that decides $\textit{PATH}$ in polynomial time.

If we wanted to build a machine $V$ that *verifies* $\textit{PATH}$, we could use a path as the certificate:

$$\textit{PATH} = \{ \langle G,s,t \rangle \mid V \textrm{ accepts } \langle \langle G,s,t \rangle, e\rangle \textrm{ for some string } e \}$$

$e$ is a proposed path: a sequence of nodes $s = v_1, v_2, \ldots, v_\ell = t$.

$V$ checks that $e$ starts at $s$, ends at $t$, and that each consecutive pair $(v_i, v_{i+1})$ is an edge of $G$. Each check takes polynomial time!

</v-clicks>

---

# LN: Name the Certificate

With a partner: for each problem, what would a certificate $c$ be? What would the verifier check?

1. Is the number $x$ composite? 
<!-- <span v-click>→ a factor $d$ with $1 < d < x$. Check that $d$ divides $x$.</span> -->

2. Does graph $G$ have a path that visits every node exactly once? 
<!-- <span v-click>→ the path. Check that it uses real edges and hits each node once.</span> -->

3. Can this Sudoku be completed? 
<!-- <span v-click>→ the filled grid. Check the rows, columns, boxes, and given clues.</span> -->


4. Can the nodes of $G$ be colored with 3 colors so no edge joins two nodes of the same color? 
<!-- <span v-click>→ the coloring. Check every edge.</span> -->

5. **Trap:** $G$ has *no* $k$-clique. 
<!-- <span v-click>→ ??? No obvious short certificate! Proving something *doesn't* exist is a different kind of problem.</span> -->

---

# Defining NP

Now that we have this definition of a polynomial time verifier, we can define NP.

<br>

**NP** is the class of languages that have polynomial time verifiers.


---

# P vs NP

<v-clicks>

Note that we have discussed how $\textit{PATH} \in \mathrm{P}$ and $\textit{PATH} \in \mathrm{NP}$. In fact, it is true that $\mathrm{P} \subseteq \mathrm{NP}$.

Why? If $A \in \mathrm{P}$, a verifier can just **ignore** the certificate $c$ and run the polynomial time decider for $A$.

In other words, *every problem that can be decided in polynomial time can also be verified in polynomial time*.

What about the reverse? Can every problem that can be verified in polynomial time also be decided in polynomial time? 

This is an open question. If this were true, then it would be the case that $\mathrm{NP} \subseteq \mathrm{P}$, and therefore $\mathrm{P} = \mathrm{NP}$.

</v-clicks>

---

# P vs. NP

<img src="/p-vs-np.png" width="500" alt="Two diagrams: on the left, P drawn as a circle strictly inside a larger NP circle; on the right, P and NP as the same circle"/>

This figure illustrates the two possibilities. <br>

Either P is a strict subset of NP (meaning there are problems in NP that cannot be decided in polynomial time), or they are the same set. 

---

# Nondeterministic Polynomial Time + Turing Machines

<v-clicks>

Where does the name NP come from?

It's short for *nondeterministic polynomial time*. 

* A *nondeterministic* Turing machine is defined the same way as a deterministic one, except the transition function maps to a **set** of possible moves:

  $\delta: Q \times \Gamma \to \mathcal{P}(Q \times \Gamma \times \{\textrm{L},\textrm{R}\})$

* It accepts if **some** branch of its computation accepts.

* A language is in NP iff it is decided by some nondeterministic polynomial time Turing machine.

* *Question: It's known that every nondeterministic TM has an equivalent deterministic TM, so why isn't this enough to show P = NP?*

</v-clicks>

<!--
Answer to the question: the standard deterministic simulation of a nondeterministic TM explores the branches one by one (breadth-first). A polynomial-time NTM can have exponentially many branches, so the simulation takes exponential time. Equivalence preserves *what* can be decided, not *how fast*.
-->


---

# NTIME

<v-clicks>

$$\textrm{NTIME}(t(n)) = \{ L \mid  L \textrm{ is a language decided by an } O(t(n)) \textrm{ time nondeterministic Turing machine} \}$$

This allows us to define NP as 
$$\mathrm{NP} = \bigcup_k \textrm{NTIME}(n^k)$$

This helps us with the question: how do I argue that a problem is in NP? 

Either:
* design a **nondeterministic** Turing machine that *decides* it in polynomial time, *or*
* design a **deterministic** Turing machine that *verifies* it in polynomial time.

</v-clicks>


---

# Example: Clique

A *clique* in an undirected graph is a subgraph where every two nodes are connected by an edge. A $k$-clique is a clique that contains $k$ nodes. 

Let $\textit{CLIQUE} = \{\langle G, k \rangle \mid G \textrm{ is an undirected graph with a } k \textrm{-clique}\}$

Show $\textit{CLIQUE}$ is in NP.

---

# Activity: Find a 4-Clique

<img src="/clique-activity.png" width="300" class="mx-auto" alt="An undirected graph with nine nodes labeled A through I arranged in a circle and connected by 18 edges"/>

<v-click>

With a partner: find 4 nodes that are **all** connected to each other. (You have 2 minutes!)

</v-click>

---

# Activity: Check a 4-Clique

<img src="/clique-activity-check.png" width="300" class="mx-auto" alt="The same graph with nodes D, E, G, and I highlighted and the edges among them drawn in red"/>

<v-clicks>

Someone claims $\{D, E, G, I\}$ is a 4-clique. Is it?

No! There is no edge between $D$ and $I$. Checking took seconds.

</v-clicks>

---

# Activity: The Answer

<img src="/clique-activity-answer.png" width="300" class="mx-auto" alt="The same graph with nodes B, E, F, and H highlighted and all six edges among them drawn in red"/>

<v-clicks>

$\{B, E, F, H\}$ is the only 4-clique. Check: $BE, BF, BH, EF, EH, FH$ are all edges.

**Your turn:** with a partner, write a verifier $V$ for $\textit{CLIQUE}$. What is the certificate? What does $V$ need to check?

</v-clicks>



---

# Clique: A Verifier

Your certificate $c$ is a potential clique: a set of nodes of $G$.

$${1|1-2|1-3|all}
\begin{align*}
V = & \textrm{``On input $\langle \langle G, k \rangle, c \rangle$,}\\
& 1. \textrm{ Test whether $c$ is a set of exactly $k$ distinct nodes in $G$.}\\
& 2. \textrm{ Test whether $G$ contains all edges connecting nodes in $c$.} \\
& 3. \textrm{ If both pass, \emph{accept}. Otherwise, \emph{reject}.''}
\end{align*}$$

---

# Clique: Verifier Runtime

<v-clicks>

Let $m$ be the number of nodes in $G$, so $G$ has at most $m^2$ edges.

**Step 1:** If $k > m$, reject. Otherwise, check each of the $k \leq m$ nodes in $c$ against the $m$ nodes of $G$: $O(m^2)$.

**Step 2:** There are $k(k-1)/2 \leq m^2$ pairs in $c$. Search the edge list for each one, which is $O(m^2)$ per pair: $O(m^4)$.

**Step 3:** Runs once.

Since $m \leq n$, $V$ runs in $O(n^4)$ time. That's polynomial, so $\textit{CLIQUE} \in \mathrm{NP}$!

</v-clicks>

---

# Clique: Guess and Check

$${1|1-2|1-3|all}
\begin{align*}
N = & \textrm{``On input $\langle G, k \rangle$,}\\
& 1. \textrm{ Nondeterministically select a subset $c$ of $k$ nodes of $G$.}\\
& 2. \textrm{ Test whether $G$ contains all edges connecting nodes in $c$.} \\
& 3. \textrm{ If yes, \emph{accept}. Otherwise, \emph{reject}.''}
\end{align*}$$

<v-clicks>

Each branch guesses one subset and checks it in polynomial time. If a $k$-clique exists, some branch guesses it and accepts.

The nondeterministic machine **guesses** the certificate that the verifier is **given**!

Why don't we know $\textit{CLIQUE} \in \mathrm{P}$? Brute force tries all $\binom{m}{k}$ subsets of nodes, which is exponential when $k \approx m/2$.

</v-clicks>

---

# Example: Subsetsum

Say we have a collection of numbers $S=\{x_1, x_2, \ldots, x_k\}$, and we want to know whether some subset of $S$ sums to a specific value $t$. For example, can I sum a subset of $\{1,2,3,4\}$ to get $7$?

<v-click>

(Yes! $3 + 4 = 7$.)

</v-click>

This is how we define our problem:

$$\textit{SUBSETSUM} = \{\langle S, t \rangle \mid S = \{x_1, x_2, \ldots, x_k\}, 
\textrm{ and for some } \{y_1, \ldots, y_l\} \subseteq S,
\textstyle\sum y_i = t \}
$$

Show $\textit{SUBSETSUM}$ is in NP.

---

# LN: Subsetsum

With a partner, before we look at the solution:

1. Write a **verifier** $V$ for $\textit{SUBSETSUM}$. What is the certificate?

2. Write a **nondeterministic** TM $N$ that decides $\textit{SUBSETSUM}$ by guessing and checking.

3. Test your verifier: $S = \{3, 34, 4, 12, 5, 2\}$ and $t = 9$. What should $V$ do with each certificate?

    * $\{4, 5\}$ <span v-click>→ accept</span>
    * $\{3, 5\}$ <span v-click>→ reject: the sum is 8</span>
    * $\{9\}$ <span v-click>→ reject: 9 is not in $S$</span>
    * $\{3, 4, 2\}$ <span v-click>→ accept: certificates don't have to be unique!</span>

---

# Subsetsum: A Verifier

Your certificate $c$ is a subset of numbers. (In the example, $c = \{3, 4\}$.)

$${1|1-2|1-3|all}
\begin{align*}
V = & \textrm{``On input $\langle \langle S, t \rangle, c \rangle$,}\\
& 1. \textrm{ Test whether $c$ is a collection of numbers that sum to $t$.}\\
& 2. \textrm{ Test whether $S$ contains all the numbers in $c$.} \\
& 3. \textrm{ If both pass, \emph{accept}. Otherwise, \emph{reject}.''}
\end{align*}$$

<v-clicks>

Remember: numbers are in **binary**, so each number has at most $n$ bits.

**Step 1:** Add up at most $k \leq n$ numbers of at most $n$ bits each and compare to $t$: polynomial.

**Step 2:** Search $S$ for each number in $c$ (marking each element as used): $O(k^2)$ comparisons of $n$-bit numbers, which is polynomial.

So $V$ is a polynomial time verifier, and $\textit{SUBSETSUM} \in \mathrm{NP}$!

</v-clicks>

---

# Subsetsum: Guess and Check

$${1|1-2|1-3|all}
\begin{align*}
N = & \textrm{``On input $\langle S, t \rangle$,}\\
& 1. \textrm{ Nondeterministically select a subset $c$ of the numbers in $S$.}\\
& 2. \textrm{ Test whether $c$ is a collection of numbers that sum to $t$.} \\
& 3. \textrm{ If yes, \emph{accept}. Otherwise, \emph{reject}.''}
\end{align*}$$

<v-clicks>

Each branch guesses one subset and adds it up in polynomial time. If some subset sums to $t$, some branch accepts.

Why don't we know $\textit{SUBSETSUM} \in \mathrm{P}$? Brute force tries all $2^k$ subsets, which is exponential.

</v-clicks>
