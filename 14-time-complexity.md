---
# try also 'default' to start simple
theme: ./unc-cs
title: Time Complexity
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

<!-- pandoc -t slidy -s notes/12-time-complexity-intro.md -o slides/12-time-complexity-intro.html --webtex -->

# Time Complexity

---

# Review: Reductions

<v-clicks>

* Reductions can be used to prove languages are undecidable
* If $A$ reduces to $B$, and $B$ is decidable, $A$ is decidable (contradiction used for Turing reductions)
* If $A$ reduces to $B$ and $A$ is undecidable, then $B$ is undecidable (used for mapping reductions)
* Turing Reduction: decide $A$ using a decider for $B$
* Mapping Reduction: turn every instance of problem $A$ into an instance of problem $B$ that has the same decision
* We used both methods to show $\textit{HALT}_{\textrm{TM}}$ and $E_{\textrm{TM}}$ are undecidable.

</v-clicks>




---

# Review: Rice's Theorem

<v-clicks>

Let $P$ be a set of TM descriptions such that:

1. $P$ is *nontrivial*: some TM descriptions are in $P$, and some are not.
2. $P$ is a property of the *language*: if $L(M_1) = L(M_2)$, then $\langle M_1 \rangle \in P \iff \langle M_2 \rangle \in P$.

Then $P$ is **undecidable**.

Any nontrivial question about *what a program computes* is undecidable: "Is $L(M)$ empty?" "Is $L(M)$ regular?"

But properties of the *machine itself* can be decidable: "Does $M$ halt on $w$ within 100 steps?" Just simulate it for 100 steps!

</v-clicks>

---

# Motivation

<v-clicks>

* So far: can a computer solve this problem **at all**?

* Last lecture's answer for many questions was no.

* But *decidable* only means the machine halts **eventually**.

    * A millisecond? A billion years?

* A decider that takes longer than the age of the universe isn't much better than no decider at all.

* New question: is the problem solvable *in practice*, not just *in principle*?

</v-clicks>

---

# Complexity Theory

<v-clicks>

* *Complexity Theory* is the investigation of the time, memory, + other resources required to solve computational problems.

* We will focus on *time complexity*.

* Notice the shift:

    * Rice: we can't decide properties of the *language* an arbitrary machine recognizes.

    * Time complexity: how many *steps* a *specific* decider takes, which we **can** count.

* So we'll always analyze runtime by building a specific decider and reasoning about it ourselves.

</v-clicks>

---

# Importance of Time Complexity

<v-clicks>

* Measures how *long* an algorithm takes to compute.

* Can consider average case, best case, or worst case scenarios.

* Why is this important?

    * Security: Modern crypto relies on the fact that breaking encryption or recovering private keys takes too long to compute.

    * User Experience: People want fast interfaces.

    * Safety: Critical systems need to make fast decisions.

</v-clicks>

---

# Some Questions You Can Answer With Time Complexity

<v-clicks>

* Is this problem solvable on a modern computer in a reasonable amount of time?

* Does this problem take as long to solve as this other problem? 

* Is this algorithm faster than this other algorithm?


In this lesson, we will formalize the idea of time complexity so we can answer these questions directly.
</v-clicks>

<!-- ---

# Big-O Notation

What do you know about Big-O notation + runtime? -->

---

# Time Complexity

<v-clicks>

To talk about how much time a problem takes to solve, we start with a specific algorithm that solves it.

"I have a Turing machine $M$ that decides problem $A$. How much time does $M$ take to decide $A$?"

Measured as the number of "steps" the algorithm takes to finish.

We count steps as a function of the size of the input.

"How long will it take $M$ to decide if $w$ is in $A$?" is determined by, and expressed in terms of, the size of $w$.

Typically, we use $n = |w|$.

</v-clicks>


---

# Running Time

<v-clicks>

Let $M$ be a Turing machine that halts on all inputs. 

The *running time* or *time complexity* of $M$ is the function $f: \mathbb{N} \to \mathbb{N}$, where $f(n)$ is the maximum number of steps that $M$ uses on any input of length $n$. 

If $f(n)$ is the running time of $M$, we say that 

"$M$ runs in time $f(n)$" and that 

"$M$ is an $f(n)$ time Turing machine" 

</v-clicks>

---

# Worst Case and Big-O

<v-clicks>

Average case, best case, and worst case really differ in which *input* we look at.

"What $w$, with $|w| = n$, will cause $M$ to take the most steps to decide if $w \in A$? How many steps will that be?"

Our definition takes the **maximum** over all inputs of length $n$, so $f(n)$ is the *worst case* running time.

Exact step counts are messy, so we describe how $f(n)$ *grows* as $n$ gets large with an asymptotic upper bound.

This is expressed using *big-O notation*.

</v-clicks>


---

# Big-O Notation

<v-clicks>

Let $f$ and $g$ be functions, $f,g: \mathbb{N} \to \mathbb{R}^+$. Say that $f(n) = O(g(n))$ if positive integers $c$ and $n_0$ exist such that for every integer $n \geq n_0$,

$$f(n) \leq c\, g(n).$$ 

$g(n)$ is an "upper bound" for $f(n)$.

Essentially: once $n$ is large enough, $f(n)$ is at most a constant multiple of $g(n)$. Ignoring constant factors, $f$ grows no faster than $g$.

</v-clicks>

---

# Determining g

For polynomials (and many other common functions), keep the highest-order term and drop its constant coefficient.

Example: 

<v-clicks>

* $f(n) = 5n^3 + 2n^2 + 22n + 6$
* Choose the highest-order term, $5n^3$.
* Drop the constant $5$.
* So, $g(n) = n^3$ and $f(n) = O(g(n)) = O(n^3)$. 

</v-clicks>


---

# LN (Do it yourself or in groups!)

<v-clicks>

For any $f(n) = O(\log_x n)$, we can write $f(n) = O(\log n)$. In other words, we can drop the log base. Why?

Hint: We can use the fact that $\log_b n = \frac{\log_x n}{\log_x b}$. 

<!-- Therefore, $\log_x n = (\log_b n)(\log_x b)$. 

Since $\log_x b$ is a constant, $\log_x n = O(\log_b n)$ for any base $b > 1$. -->
</v-clicks>

---
layout: two-cols
---

# Activity: Selection Sort

::left::

```python {all|5|9-12|14-17}
def selection_sort(items: list[int]) -> list[int]:
    """Repeatedly pull out the minimum."""
    # Outer loop keeps track of how far we've sorted
    outer_idx: int = 0
    while outer_idx < len(items):
        # Inner loop finds the minimum of the unsorted part
        inner_idx: int = outer_idx
        min_index: int = outer_idx
        while inner_idx < len(items):
            if items[inner_idx] < items[min_index]:
                min_index = inner_idx
            inner_idx += 1
        # Swap the minimum with the first unsorted element
        smallest: int = items[min_index]
        items[min_index] = items[outer_idx]
        items[outer_idx] = smallest
        outer_idx += 1
    return items
```

<!-- 

---

# Selection Sort: Solution

<v-clicks>

Every individual line (comparison, assignment, swap) takes **constant** time, $O(1)$.

The outer loop runs $n$ times, doing $O(1)$ setup and swap work each time: $O(n)$ total.

When `outer_idx` $= i$, the inner loop runs $n - i$ times.

Total inner-loop iterations:
$$n + (n-1) + (n-2) + \cdots + 1 = \frac{n(n+1)}{2} = \frac{1}{2}n^2 + \frac{1}{2}n$$

Each inner iteration is $O(1)$, so the total is $O(n) + O\left(\frac{1}{2}n^2 + \frac{1}{2}n\right) = O(n^2)$.

Keep the highest-order term, drop the constant: selection sort runs in $O(n^2)$ time.

Is this the worst case? The inner loop runs the same number of times on **every** input of length $n$, so best, average, and worst case are all $O(n^2)$!

</v-clicks> -->

---

# Small-o Notation

<v-clicks>

Small-o notation, $o(g(n))$, lets you express that $f(n)$ grows *strictly more slowly* than $g(n)$.

Let $f$ and $g$ be functions, $f,g: \mathbb{N} \to \mathbb{R}^+$. Say that $f(n) = o(g(n))$ if

$$\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0.$$ 

In other words, $f(n) = o(g(n))$ if for **every** real $c > 0$, there exists an $n_0$ such that $f(n) < c\, g(n)$ for every integer $n \geq n_0$.

Compare to big-O, where only **some** constant $c$ has to work.

</v-clicks>

---

# Common Runtimes


<img src="/big-o-runtimes.png" width="500" alt="Plot comparing how common big-O runtimes grow as n increases"/>




---

# Time Complexity Classes

<v-clicks>

A "linear time" algorithm runs in $O(n)$ time. We can use runtimes like this to group *languages* into classes.

Let $t: \mathbb{N} \to \mathbb{R}^+$ be a function. Define the *time complexity class*, $\textrm{TIME}(t(n))$, to be the collection of all languages that are decidable by an $O(t(n))$ time Turing machine. 

Example: 

* $\textrm{TIME}(n^2)$ contains all languages that can be decided in $O(n^2)$ time.
* So, if there exists a machine $M$ that decides $A$ in time $O(n^2)$, we say $A \in \textrm{TIME}(n^2)$.

</v-clicks>


---

# Time Complexity Class P

<v-clicks>

Now, we will introduce the class of languages decidable in polynomial time, P.


P is the class of languages that are decidable in polynomial time on a deterministic single-tape Turing machine. 

In other words, 

$$\mathrm{P} = \bigcup_k \textrm{TIME}(n^k).$$ 


P is important because it roughly corresponds to the class of problems that are realistically solvable on a computer.

</v-clicks>

---

# Problems in P

<v-clicks>

Now we can look at some examples of problems that are in P and show how to prove this. 

We prove a problem is in P by presenting an algorithm that solves it in polynomial time. 

Our proof should:


1. Express our problem as a language $A$
2. Present a Turing machine computable algorithm $M$ that decides $A$
3. Argue the runtime of $M$

</v-clicks>


---

# Example: Directed Path

<v-clicks>

Say we have a directed graph $G$ that contains nodes $s$ and $t$. The problem we want to solve is whether or not there exists a directed path from $s$ to $t$ in $G$.

So, first let's express this as a language:

$$\textit{PATH} = \{\langle G, s, t \rangle \mid G \textrm{ is a directed graph that has a directed path from $s$ to $t$} \}$$

Now, let's define an algorithm $M$ to decide this. 

</v-clicks>

---

<!-- # PATH Algorithm -->


<!-- 

$${1|1-2|1-5|1-6}
\begin{align*}
M = & \textrm{``On input $\langle G, s, t \rangle$,}\\
& 1. \textrm{ Place a mark on node $s$.}\\
& 2. \textrm{ Repeat until no additional nodes are marked:} \\
& 3. \hspace{10pt} \textrm{Scan all edges of $G$. If an edge $(a,b)$ is found going from a marked node $a$} \\
& \hspace{20pt} \textrm{to an unmarked node $b$, mark node $b$.} \\
& 4. \textrm{ If $t$ is marked, \emph{accept}. Otherwise, \emph{reject}.''}
\end{align*}$$

Finally, we have to argue that $M$ runs in polynomial time, which shows that $\textit{PATH} \in \mathrm{P}$.

---

# PATH Runtime

<v-clicks>

Let $m$ be the number of nodes in $G$.

Steps 1 and 4 run only once.

The loop in step 2 runs at most $m$ times, since each iteration except the last marks a new node.

Each run of step 3 scans every edge, and there are at most $m^2$ edges, so each scan takes $O(m^2)$ steps.

Total: <span v-mark="{color: 'orange', type: 'underline' }">$O(1) + O(m \cdot m^2) = O(m^3)$</span>.

Let $n$ be the length of $\langle G, s, t \rangle$. Every node appears in the encoding, so $m \leq n$, and the runtime is $O(n^3)$. That's polynomial!

Note: brute force would try roughly $m^m$ potential paths. That's a lot of searching... and not polynomial!
</v-clicks> -->


<!-- --- -->

# Another Example: Relatively Prime Numbers

<!-- <v-clicks>

Say our problem is: I want to know if two integers $x$ and $y$ are relatively prime.
    
We can define our language as $\textit{RELPRIME} = \{\langle x,y \rangle \mid x \textrm{ and } y \textrm{ are relatively prime}\}$.

Relatively prime means $\textrm{GCD}(x, y) = 1$.

Recall the Euclidean Algorithm: $(x,y) \to (y, x \bmod y)$ until $y = 0$.

$${1|1-2|1-3|1-4|1-5}
\begin{align*}
       R = &\textrm{ ``On input $\langle x,y \rangle$, }\\
       &1. \textrm{ Repeat until $y=0$:}\\
        &2. \hspace{10pt} \textrm{ Assign $x \leftarrow x \bmod y$.}\\
        &3. \hspace{10pt} \textrm{ Swap $x$ and $y$.}\\
        &4. \textrm{ If $x$ is $1$, \emph{accept}. Otherwise, \emph{reject}.''}
\end{align*}$$

</v-clicks>

---

# RELPRIME Runtime: What is $n$?

<v-clicks>

Numbers are encoded in **binary**, so $n$ is the number of *bits*: about $\log_2 x + \log_2 y$.

Brute force (try every divisor from 2 up to $y$) takes about $y$ steps.

But $y$ can be as large as $2^n$, so brute force is **exponential** in $n$!

For $R$: steps 2 and 3 take polynomial time (assuming $\bmod$ does), and step 4 runs once.

So we just need to count how many times the loop runs.

</v-clicks>

---

# RELPRIME Runtime: Counting Iterations

<v-clicks>

**Claim:** Every time step 2 runs (except possibly the first time), $x$ is cut at least in half.

After each iteration $x > y$. (If $x < y$ at the start, the first iteration just swaps them.)

* If $y \leq x/2$: $\quad x \bmod y < y \leq x/2$
* If $y > x/2$: $\quad x \bmod y = x - y < x/2$

Because of the swap, each value is halved at least every **two** iterations.

So the loop runs at most about $2\log_2 x + 2\log_2 y + 1 = O(n)$ times.

$O(n)$ iterations $\times$ polynomial time each $=$ polynomial. So $\textit{RELPRIME} \in \mathrm{P}$!

</v-clicks> -->
