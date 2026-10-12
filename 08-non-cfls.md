---
# try also 'default' to start simple
theme: ./unc-cs
title: CFGs, PDAs, and Non-CFLs
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

# CFGs, PDAs, and Non-CFLs

---

# Recall: 


<img src="/public/cfls-rls.png" width="600"/> 

---

# CFLs, CFGs, and PDAs

<v-clicks>

Recall: A language is context free if and only if some pushdown automaton recognizes it. 

This statement isn't actually a given. By definition, context-free grammars describe context-free languages. 

The specific lemma we'd like to prove is:

If a language is context free, then some pushdown automaton recognizes it.

We will prove this lemma by showing every CFG can be converted into an "equivalent" PDA. 

</v-clicks>

---

# Converting a CFG to a PDA

From a high level:



<v-clicks>

- We can use the idea of *substitution* used by CFGs. In other words, CFGs use variables essentially as intermediate symbols and substitute them using the rules of the grammar until we get to a string of only terminal symbols.

- The PDA will use this same idea. It can push the start symbol on the stack and then:
    - If the top element of the stack is a nonterminal, pop it and push a substitution
    - If the top element of the stack is a terminal, pop it and check if it matches the input string 

</v-clicks>


---

# Converting a CFG to a PDA

1. Place the marker symbol \$ and the start variable on the stack.
2. Repeat the following steps:

<v-clicks>

  a. If the top element in the stack is a nonterminal symbol (e.g. $A$), nondeterministically select one of the rules for $A$ and substitute $A$ by applying this rule. Push that new substution onto the stack.

  b. If the top element in the stack is a terminal symbol (e.g. $a$), read the next symbol from the input to see if it matches $a$. If they match, continue. Otherwise, consider this a reject and try another "branch" of nondeterminism. (Apply a different rule in the previous step.)

  c. If the top of the stack is \$, this means the stack is empty, so transition to the accept state. If the input has all be read, that means that the string is accepted.

</v-clicks>

---

# Converting a CFG to a PDA

$$
\begin{align*}
    S &\to aTb ~|~ b \\
    T & \to Ta ~|~ \varepsilon
\end{align*}$$

<img src="/public/cfg-conversion/s1.png" width="400"/>

---

# Converting a CFG to a PDA

$$
\begin{align*}
    S &\to aTb ~|~ b \\
    T & \to Ta ~|~ \varepsilon
\end{align*}$$

<img src="/public/cfg-conversion/s2.png" width="400"/>

---

# Converting a CFG to a PDA

$$
\begin{align*}
    S &\to aTb ~|~ b \\
    T & \to Ta ~|~ \varepsilon
\end{align*}$$

<img src="/public/cfg-conversion/s3.png" width="400"/>

---

# Converting a CFG to a PDA

$$
\begin{align*}
    S &\to aTb ~|~ b \\
    T & \to Ta ~|~ \varepsilon
\end{align*}$$

<img src="/public/cfg-conversion/s4.png" width="400"/>

---

# Converting a CFG to a PDA

$$
\begin{align*}
    S &\to aTb ~|~ b \\
    T & \to Ta ~|~ \varepsilon
\end{align*}$$

<img src="/public/cfg-conversion/s5.png" width="400"/>

---

# Converting a CFG to a PDA

$$
\begin{align*}
    S &\to aTb ~|~ b \\
    T & \to Ta ~|~ \varepsilon
\end{align*}$$

<img src="/public/cfg-conversion/final.png" width="400"/>


---

# Non-Context Free Languages + The Pumping Lemma

---
layout: two-cols

---
# Non-Context Free Languages 

We can use a modified version of the pumping lemma to prove a language is not context free:

If $A$ is a context-free language, then there is a number $p$ (the pumping length) where, if $s$ is any string in $A$ of length $\geq p$, then $s$ may be divided into $s = uvxyz$ satisfying these conditions:

::left::


<img src="/public/parse-tree-pumping-lemma.png" width="400"/>


::right::

<v-clicks>

* $|vy| > 0$ (at least one of $v$ or $y$ is not the empty string $\epsilon$)
* $|vxy| \leq p$
* for each $i \geq 0$, $uv^ixy^iz \in A$
</v-clicks>

---

# Example: $a^nb^nc^n$

The basic outline of the proof is the same as our previous pumping lemma proofs:

| Proof Step | Reasoning |
| --- | --- |
| <span v-click="1"> 1. $B = \{a^nb^nc^n \mid n \geq 0 \}$ is a context free language</span>| <span v-click="1"> Assumption  </span> |
| <span v-click="2"> 2. $s$ can be split into $s = uvxyz$, where for any $i \geq 0$, $uv^ixy^iz$ is in $B$ </span>| <span v-click="2"> Pumping Lemma </span> |
| <span v-click="3"> 3. $\exists s = a^pb^pc^p \in B$ </span>| <span v-click="3"> Definition of $B$ </span> |
| <span v-click="4"> 4. It's impossible to split $s$ into $s = uvxyz$, where $\forall i \geq 0$, $uv^ixy^iz \in B$ </span>| <span v-click="4"> Shown Next...</span> |
| <span v-click="5"> $\rightarrow \leftarrow$ </span>| <span v-click="5">Lines 3 and 4 contradict.</span> |


---

# Proving Line 4

<v-clicks>

We have to show it's impossible to split $s = uvxyz$, where $\forall i \geq 0$, $uv^ixy^iz \in B$.

This will have to be a *proof by cases*.

We want to consider all possible assignments for $s = uvxyz$, specifically focusing on assignments for $v$ and $y$. 

One approach: first consider all the ways $vxy$ can be assigned, and use that to come up with cases for all possible assignments for $v$ and $y$.


</v-clicks>
---

<!-- # Proving Line 4

We have to consider all ways to assign $u,v,x,y,z$. 

<v-clicks>

We can focus specifically at how we'd assign $v$ and $y$

There are two main cases we consider:

* Case 1: Either string ($v$ or $y$) could be a string of two characters (e.g. $a^j b^k$)

* Case 2: Either string ($v$ or $y$) could be a single repeating character (e.g. $a^j$)


Note: With cases involving "either" string, you still have to address what the *other* string could be assigned.

</v-clicks>

---

# Proving Line 4: Case 1

Case 1: Either string ($v$ or $y$) could be a string of two characters 


<v-clicks>


Say for example, $v=aa \ldots ab \ldots bb$.

If we "pump" $v$ once, we would get a string of the form 
$aa \ldots abb \ldots bb aa \ldots abb \ldots bb cc \ldots c$,  

so it would not be of the form $a^n b^n c^n$. $\checkmark$

In this case, it does not matter what the "other" string (in this example $y$) is assigned because the characters of the substring would be out of order regardless.

</v-clicks>

---

# Proving Line 4: Case 2

Case 2: Either string ($v$ or $y$) could be a single repeating character (e.g. $a^j$)


<v-clicks>


Say for example, $v=aa \ldots a$ and $y = \varepsilon$

If we "pump" $v$ and $y$ once, we get more $a$s than $b$s and $c$s, 

so the string would no longer be of the form $a^n b^n c^n$. $\checkmark$

But what if $y \neq \varepsilon$?

We know it wouldn't work if $y$ was a string of two characters (case 1), but we must consider when both $v$ and $y$ are single repeating characters...

</v-clicks>

---

# Proving Line 4: Case 2

<v-clicks>

Updated cases:

Case 1: Either string ($v$ or $y$) could be a string of two characters $\checkmark$

Case 2 (updated): Either string ($v$ or $y$) could be a single repeating character (e.g. $a^j$) *but not both* $\checkmark$

Case 3: Both strings ($v$ and $y$) are single repeating characters.

</v-clicks>

---

# Proving Line 4: Case 3

Case 3: Both strings ($v$ and $y$) are single repeating characters.

<v-clicks>

$v$ and $y$ could be the same repeating character or different repeating characters, so we must consider both cases.

Say for example, $v=aa \ldots a$ and $y = aa \ldots a$

If we "pump" $v$ and $y$ once, we get more $a$s than $b$s and $c$s, 

so the string would no longer be of the form $a^n b^n c^n$. $\checkmark$

If they were different characters, say $v=aa \ldots a$ and $y = bb \ldots b$

If we "pump" $v$ and $y$ once, we get more $a$s and $b$s than $c$s, 

so the string would no longer be of the form $a^n b^n c^n$. $\checkmark$

</v-clicks>

---

# Proving Line 4

Cases:

Case 1: Either string ($v$ or $y$) could be a string of two characters $\checkmark$

Case 2 (updated): Either string ($v$ or $y$) could be a single repeating character (e.g. $a^j$) *but not both* $\checkmark$

Case 3: Both strings ($v$ and $y$) are single repeating characters.$\checkmark$ -->


--- 

# Another example - Considering Assignments that Don't Work

Say we want to prove $B = \{ww ~|~ w\in \{0,1\}^*\}$ is not context free.

Demonstrate why $0^p0^p$ is *not* a good choice for $s$.

---

# ww

Prove $B = \{ww ~|~ w\in \{0,1\}^*\}$ is not context free.

| Proof Step | Reasoning |
| --- | --- |
| $B = \{ww ~\mid~ w\in \{0,1\}^*\}$ is a context free language | Assumption |
| $s$ can be split into $s = uvxyz$, where for any $i \geq 0$, $uv^ixy^iz$ is in $B$ | Pumping lemma |
| Choose $s = 0^p1^p0^p1^p \in B$ | Definition of $B$ |
| It's impossible to split $s$ into $s = uvxyz$, where $\forall i \geq 0$, $uv^ixy^iz \in B$ | Shown next... |
| $\rightarrow \leftarrow$| Lines 3 and 4 contradict.|

---

# Proving Line 4

Cases: 

<v-clicks>

* $v$ and/or $y$ are all $0$'s

* $v$ and/or $y$ are all $1$'s

* Either $v$ or $y$ is $0$'s followed by $1$'s.

* Either $v$ or $y$ is $1$'s followed by $0$'s


</v-clicks>

<v-clicks>

We do *not* need to consider the case where $v$ or $y$ contains more than two different characters <br> (e.g. $v = 00 \ldots 0 11 \ldots 1 00 \ldots 0$) <br>
because we have the requirement that $|vxy| \leq p$.

<!-- Use these cases for your CQ!  -->
</v-clicks>



---

# Something to Think About...

<v-clicks>

We've proven $\{a^nb^nc^n \mid n \geq 0 \}$ and $\{ww ~\mid~ w\in \{0,1\}^*\}$ are not context-free. 

In other words, a PDA is *not* sufficient to recognize these languages.

Why not? 

What could we *add* to the PDA to make it so that it IS sufficient?

</v-clicks>