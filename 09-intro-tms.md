---
# try also 'default' to start simple
theme: ./unc-cs
title: Intro to Turing Machines
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

# The Invention of the Turing Machine


## A technical history

<!-- Fall 2026 — UNC-Chapel Hill -->

Alyssa Lytle 

---

# Motivation

<v-clicks>

Last lesson, we proved the languages $a^nb^nc^n$ and $ww$ are *not* context-free. 

The pumping lemma focuses on why a CFG is not sufficient to represent these languages.

Let's reason about why PDA's are not sufficient models to recognize these languages. What are they missing?

(Hint: think about the PDA's we built for $a^nb^n$ and palindromes.)

</v-clicks>


---

# Turing Machines

<img src="/public/comp-hierarchy.png" width="500"/>

The final and *most powerful* computational model we will discuss

---

# Turing Machines


<v-clicks>
 
The Turing Machine is named after Alan Turing, who invented them in 1936. 

Still used as the standard for what it means for a function to be "computable".

There are multiple other "computationally equivalent" formalisms that have been developed to represent computability:

* Post systems
* $\mu$-recursive functions
* $\lambda$-calculus
* combinatory logic
* modern programming languages (e.g. C)


We will use the Turing Machine as our model of computation because it *most closely resembles how modern computers behave*.

Defining computability in terms of a problem solvable by a Turing Machine: The Church-Turing Thesis.

</v-clicks>

---

# Turing Machines: General Design

<img src="/public/turing-scheme.png" width="400"/>

<v-clicks>

* Initially, tape contains only the input string (blank otherwise)
* The tape is considered *infinite*
* The machine can read + write information on the tape
* The machine behaves deterministically. That is, there is only one set of actions the machine can take given a current state and tape input.
* Machine continues until it reaches an *accept* or *reject* state
* We assume all transitions are "defined". (If a transition is not explicitly stated, that means we transition to a "reject" state.)
</v-clicks>

---

# The question that started it all

<v-clicks>

* 1928: David Hilbert asks the *Entscheidungsproblem*
* *"Is there a mechanical procedure that, given any mathematical statement, decides whether it is provable?"*
* *("What even is this mechanical procedure?")*

</v-clicks>

---

# The Contributions of the Turing Machine

<v-clicks>

* Proved the answer to Hilbert's question is no 
* (Accidentally) Defined general-purpose computing
* Helped end a world war
* Seeded every weaker model you've studied this semester.
</v-clicks>

---
layout: two-cols

---

# Alan Turing Before 1936

::left::

<v-clicks>

* Born 1912, London
* Sherborne School (cycled 60 miles to attend)
* Elected Fellow of King's at age 22 for his dissertation
* 1935: Attends Max Newman's Cambridge lectures on the foundations of mathematics — his introduction to the Entscheidungsproblem

</v-clicks>

::right::

<img src="/public/alan-turing.jpg" width="250"/>



---

# The World in 1928–1936

<v-clicks>

* 1928: Hilbert & Ackermann pose the Entscheidungsproblem
* Early 1936: Alonzo Church defines the λ-calculus and proves the Entscheidungsproblem unsolvable — *months before Turing*
* Church's answer was formal, but didn't obviously map to human calculation. *Where is the "mechanical procedure" we're looking for?*


</v-clicks>

---

# What was Hilbert *Actually* Asking?

<v-clicks>

* Hilbert's program was almost political: put knowledge beyond disagreement.
* A response to the foundational crises of the late 1800s (Russell's paradox, non-Euclidean geometry, Cantor's infinities).
* The ambition: reason could in principle resolve every mathematical question.
* Gödel, Church, + Turing jointly ended that hope.

</v-clicks>

---

# What Counted as a "Computer" in 1936?

<v-clicks>

* The word "computer" meant a person — usually a woman — working through calculations with pencil and paper
* No programming languages. No notion of a *grammar* or a *language* in the CS sense.
* Every existing machine was special-purpose.

</v-clicks>



<!-- # Machines before Turing (I)

<v-clicks>

* Pascal's calculator (1642), Leibniz's stepped reckoner (1673) — mechanical arithmetic only
* Jacquard loom (1804) — programmable via punched cards, but weaving, not computing
* Babbage's Difference Engine (1820s) — special-purpose, mostly unfinished
* Babbage's Analytical Engine (1830s) — ALU + memory + conditional branching + loops
    * In modern terms: Turing-complete — but never built
    * Ada Lovelace's 1843 notes include what's often called the first algorithm

</v-clicks>

---

# Machines before Turing (II)

<v-clicks>

* Scheutz difference engines (1850s–60s) — actually-built Babbage descendants, sold to a London government office
* Kelvin's tide predictor (1872), Thomson's differential analyzer (1876) — analog, not digital
* Vannevar Bush's differential analyzer (MIT, 1931) — state-of-the-art the year Turing starts undergrad
* Zuse Z3 (May 1941, Berlin) — first working programmable digital computer. *After* Turing's paper. Unknown outside Germany.

</v-clicks>

<v-click>

Key observation: every one of these was *special-purpose*. None had a notion of a universal machine.

</v-click> -->


---


# Turing's 1936 Paper

<v-clicks>

* Turing imagines a human "computer" with pencil, paper, and a rulebook — and *abstracts* that person
* The result: finite control + unbounded tape + read/write head + transition table
* Uses this definition to prove the Entscheidungsproblem is unsolvable

</v-clicks>

<v-click>

Design choices came from asking what a *person* could do without unlimited memory of their own. That's why the alphabet is finite, states are finite, and moves are local (L/R).

</v-click>

<!-- --- -->

<!-- # Where each result shows up in COMP 455

<v-clicks>

* TM definition → the model in LN14+
* Universal machine → why $A_{TM}$ makes sense as a decision problem (LN17)
* Halting problem → $HALT_{TM}$, diagonalization in LN17
* Entscheidungsproblem unsolvable → ancestor of Rice's theorem and every reduction in LN18–19
* Equivalence to λ-calculus → first form of the Church–Turing thesis — the reason "algorithm" = "TM"

</v-clicks> -->



---

# Timeline

<v-clicks>

* 1918:  The German Enigma cipher was created by German engineer Arthur Scherbius
* ~1926: The German military adopts the Enigma cipher
* 1932: Polish cryptanalysts Rejewski, Różycki, Zygalski first cracked the machine by finding patterns in the cyphertext, causing Germany to make updates/fixes.
* 1938: Polish machine "Bomba" designed to automate the decryption. The German's return by making the Enigma more computationally complex, making Bomba insufficient. 
* 1939: Turing reports to the Government Code and Cypher School four days after Britain declares war on Germany
* 1940: Turing + Gordon Welchman prototype an electromechanical machine, the "Bombe"
* By 1943: Bletchley is decrypting ~84,000 Enigma messages per month — two every minute

</v-clicks>

---

# U-boats + The Ethical Dilemma

<v-clicks>

* U-boats were sinking the convoys bringing American supplies to Britain
* Breaking naval Enigma let the Admiralty route convoys *around* U-boat wolfpacks
* The Battle of the Atlantic turned in 1943 — not by one factor, but Bletchley was central

</v-clicks>

## The Ethical Issue

<v-clicks>

* Acting on decrypted intelligence reveals the code is broken.
* So sometimes you let attacks succeed to protect the secret.
* *Whose lives do you spend to protect the capability?*


</v-clicks>


---

# How much did it matter?

<v-clicks>

* Historians' estimate (Harry Hinsley and others): Bletchley shortened the war in Europe by 2–4 years
* Secondary extrapolations: on the order of millions of lives saved. Treat as *informed estimate*, not measurement.
* Important caveat: Bletchley employed ~10,000 people by 1945. Turing was *pivotal*, not solo.
* The Bombe design was Turing & Welchman's. The U-boat break was *his team's*. The operation was collective.

</v-clicks>

---

# Secrecy, Memory, Credit

<v-clicks>

* Bletchley stayed classified until the 1970s.
* Participants couldn't tell families, employers, or historians what they'd done.
* Many — especially the ~8,000 women who did skilled cryptanalytic and operational work — died uncredited.
* The popular "Turing cracked Enigma" story erases:
    * The Polish mathematicians who made the first break
    * Gordon Welchman, Joan Clarke, Tommy Flowers
    * Thousands of Wrens who operated the Bombes

</v-clicks>

<v-click>

*Food for thought:* How does the history of computing choose its heroes, and whom does that choice erase?

</v-click>

---




# Alan Turing After The War

<v-clicks>

* 1952: Convicted of "gross indecency" under Section 11, Criminal Law Amendment Act 1885
* Reported a burglary; acknowledged a sexual relationship with a man during the investigation
* Chose chemical castration (synthetic oestrogen) over prison
* Lost his security clearance because *homosexuality was officially deemed a security risk*
* Died of cyanide poisoning on  Jun 7, 1954, aged 41, at home in Wilmslow
* 2013: Royal pardon under the Royal Prerogative of Mercy
* 2017: the "Alan Turing law": automatic posthumous pardons + "disregard-and-pardon" for the living

</v-clicks>

---

# Section 11, Criminal Law Amendment Act 1885

<v-clicks>

* Same statute that convicted Oscar Wilde in 1895
* Section 11 not repealed in England and Wales until the Sexual Offences Act 1967
    * Scotland: 1980. Northern Ireland: 1982.
* ~49,000 men convicted under the statute while it was in force
* Turing is remembered because he was famous. Most aren't.
* 2013 pardon applied to Turing *alone*.
* 2017 Alan Turing law: extended automatic pardons (but no compensation).

</v-clicks>


---

# Technology Since Then...

<v-clicks>

* The Bombe is a *special-purpose electromechanical automaton*, effectively a finite-state device searching a huge key space
* Post-war realization: a general-purpose machine could do what the Bombe did (and more)
* The models you've studied all come *later*
    * Everything weaker than a TM was invented in the 15 years after Turing's paper
    * Mostly by people asking: *"what if we restrict what the machine can remember?"*
    * The course arrow DFA → NFA → regex → CFG → PDA → TM is the *reverse* of history


</v-clicks>



---

# The AI line Turing Started

<v-clicks>

* 1950 "Imitation Game" paper proposes replacing "can machines think?" with a behavioral test
* Critiques, old and new: The test *rewards deception and anthropomorphism* rather than truthfulness, usefulness, calibration
* Who gets to decide what counts as intelligence? Still contested — MMLU, ARC-AGI, LLM evaluation debates

</v-clicks>

---

# The Ethics of a Universal Machine

<v-clicks>

* A universal machine is, by design, morally neutral — same hardware runs a tax calculator or a surveillance system
* Responsibility of the inventor: Does the inventor of a universal technology bear responsibility for downstream uses?
* Computability and personhood: if every mental process is Turing-computable, is there a principled line between humans and machines? Does a mind made of code deserve the same moral consideration as a mind made of neurons?

<!-- If a program can suffer, is it wrong to delete it?
If we could run a complete simulation of a human brain, would turning it off be murder? Would running it in pain be torture?
What are the morally relevant properties of a thing — and can software have them?
Is there anything about being made of carbon rather than silicon that matters ethically, or is that a prejudice we’ll look back on the way we look at earlier prejudices about who counts?
Suppose two systems are computationally identical, one running on neurons and one on a GPU. Is there any principled reason to grant moral status to one and not the other? -->

</v-clicks>


---

# What the Course Leaves you With

<v-clicks>

* DFAs/NFAs & regex: `grep`, lexers, input validation, intrusion-detection signatures
* CFGs & PDAs: every programming-language parser. YACC/Bison/ANTLR. HTML, JSON.
* Pumping lemmas: why HTML can't be parsed with pure regex
* TMs & decidability: static analysis, type checking, verification. Rice's theorem is why "detect all malware" is impossible *in principle*
* Complexity: P vs NP, cryptography, optimization, ML

</v-clicks>



---

# Primary sources

* Turing, A. M. (1936). *On Computable Numbers, with an Application to the Entscheidungsproblem.*
* McCulloch & Pitts (1943). *A Logical Calculus of the Ideas Immanent in Nervous Activity.*
* Kleene (1956). *Representation of Events in Nerve Nets and Finite Automata.*
* Chomsky (1956). *Three Models for the Description of Language.*
* Rabin & Scott (1959). *Finite Automata and Their Decision Problems.*
* Hodges, A. (1983). *Alan Turing: The Enigma.*
* Hinsley & Stripp, eds. (1993). *Codebreakers: The Inside Story of Bletchley Park.*
* Copeland, ed. (2004). *The Essential Turing.*
* Weizenbaum (1976). *Computer Power and Human Reason.*
* Black (2016). *Saving Bletchley Park.*
* Benjamin (2019). *Race After Technology.*
* Floridi (2013). *The Ethics of Information.*



