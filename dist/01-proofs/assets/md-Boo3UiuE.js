import{E as e,Q as t,S as n,U as r,_ as i,_t as a,v as o,y as s,yt as c,z as l}from"./modules/shiki-BFOesOFp.js";import{n as u,t as d}from"./slidev/context-DeGEKdDw.js";import{t as f}from"./slidev/default-CtdSM1PA.js";var p={__name:`01-proofs.md__slidev_16`,setup(p){let{$slidev:m,$nav:h,$clicksContext:g,$clicks:_,$page:v,$renderContext:y,$frontmatter:b}=u();return g.setup(),(u,p)=>{let m=r(`vclick`);return l(),o(f,c(e(a(d)(a(b),15))),{default:t(()=>[p[1]||=i(`h1`,null,`Other Types of Proofs`,-1),p[2]||=i(`p`,null,`You may see some other types of proofs that follow from the types of proofs we’ve already discussed.`,-1),n(m,null,{default:t(()=>[...p[0]||=[i(`ul`,null,[i(`li`,null,`Proof by Cases`),i(`li`,null,`Proof by Construction`)],-1)]]),_:1}),s(` ---

# Biconditional Proofs

- For our proofs, we are basically writing a $\\implies$ to get from line to line.

- Sometimes, instead of proving $P \\implies Q$, you'll want to prove $P \\iff Q$. 

- The benefit of this type of proof is that you can start from $P$ or $Q$ to get to the other side. This is because $P \\iff Q$  is the same as saying $Q \\iff P$. 

- The added requirement is that you have to use $\\iff$ rules to get from line to line. Thankfully, most definitions are actually defined using $\\iff$. `),s(` ---

# Biconditional Proofs


##  Example
We want to prove $x \\in \\overline{A \\cap B} \\iff x \\in \\bar{A} \\cup \\bar{B}$




---

# Logical Equivalence
Proofs of logical equivalence are of the form $P \\iff Q$. 

Why? Remember that if $P \\equiv Q$, then $P \\iff Q$ is always true!


##  Example
Say we want to prove $a \\implies b \\equiv \\neg b \\implies \\neg a$.

So we can say $P: a \\implies b$ and $Q: \\neg b \\implies \\neg a$.

First, let's do this proof starting at $P$ to get to $Q$.
 
<!-- \\begin{equation*}
| | $\\textrm{Column 1}$ | $\\textrm{Column 2}$ |
| --- | --- | --- | 

    1.$ | $a \\implies b$ | $\\textrm{Given } (P)$ |
    2.$ | $\\equiv \\neg a \\lor b$ | $\\textrm{Implication Definition}$ |
    3.$ | $\\equiv b \\lor \\neg a$ | $\\textrm{Commutativity}$ |
    4.$ | $\\equiv \\neg (\\neg b) \\lor \\neg a$ | $\\textrm{Double Negation}$ |
    5.$ | $\\equiv \\neg b \\implies \\neg a$ | $\\textrm{Implication Definition }  \\square ~ (Q)~$ | 
\\end{array}
\\end{equation*} `),s(` ---

# Logical Equivalence Cont.

As previously stated, we can also start at $Q$ to get to $P$.  `),s(` \\begin{equation*}
| | $\\textrm{Column 1}$ | $\\textrm{Column 2}$ |
| --- | --- | --- | 

    1.$ | $\\equiv \\neg b \\implies \\neg a$ | $\\textrm{Given } (Q)$ |
    2.$ | $\\equiv \\neg \\neg b \\lor \\neg a$ | $\\textrm{Implication Definition}$ |
    3.$ | $\\equiv b \\lor \\neg a$ | $\\textrm{Double Negation}$ | 
    4.$ | $\\equiv \\neg a \\lor b$ | $\\textrm{Commutativity}$ |
    5.$ | $\\equiv a \\implies b$ | $\\textrm{Implication Definition } \\square ~ (P)  $ | 
\\end{array}
\\end{equation*} `)]),_:1},16)}}};export{p as default};