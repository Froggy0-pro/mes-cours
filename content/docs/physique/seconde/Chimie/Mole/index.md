---
title: "1) La mole - formulaire"
weight: 1
---
## Quantité de matière et mole

Lorsque l'on veut compter un grand nombre d'entités de manière plus efficace, il n'est pas rare de les regrouper par paquets du même nombre et de plutôt compter ces paquets. Par exemple, on regroupe historiquement les oeufs par douzaines. Une douzaine d'oeuf est un paquet comprenant 12 oeufs, ainsi si j'ai 36 oeufs sur les bras, je peux dire plus simplement que j'en ai 3 douzaines. Et bien on fait pareil avec les espèces chimiques! Cependant, plutôt que de les regrouper par paquets de 12, on les regroupe par paquets de $6.02*10^{23}$. Ce nombre s'appelle la **constante d'Avogadro**, qu'on note $N_A$ et on appelle un paquet de cette taille **une mole** de matière.

On définit alors une grandeur physique, la **quantité de matière**, qui permet de rendre compte du nombre d'entités chimiques dans un échantillon. Elle est notée $n$ et s’exprime en **moles (mol)**.

Ainsi, si j'ai par exemple un récipient contenant $0.5$ mol d'eau, cela signifie que j'ai la moitié d'une mole de molécules d'eau dans ce récipient, soit $3.01*10^{23}$ molécules d'eau.

On peut relier facilement la quantité de matière $n$ au nombre d’entités $N$ et à la constante d'Avogadro: $\boxed{n = \frac{N}{N_A}}$ ou encore $\boxed{N = n \times N_A}$ avec :

- $n$ : quantité de matière (en $mol$)  
- $N$ : nombre d’entités (sans unité)
- $N_A$ : constante d’Avogadro (en $mol^{-1}$)

## Relation avec la masse

Bien entendu, la masse d'un échantillon dépend de sa quantité de matière: plus il y a d'entités chimiques dans l'échantillon, plus il est lourd!

Un atome ne contenant que des protons, des neutrons et des électrons, sa masse correspond à la somme des masses de tous ces éléments: $\boxed{m_{atome} = nb_{protons} * m_{proton} + nb_{neutrons} * m_{neutron} + nb_{électrons} * m_{électron}}$

<div style="margin: 1.5rem 2rem;">

| Particule | Masse (kg) |
|:---------:|:----------:|
| **Proton** | $1{,}67 \times 10^{-27}$ |
| **Neutron** | $1{,}67 \times 10^{-27}$ |
| **Électron** | $9{,}11 \times 10^{-31}$ |

</div>

On peut d'ailleurs se simplifier la vie car:
- la masse d'un proton et d'un neutron est quasiment identique, on peut donc les rassembler et utiliser la masse du nucléon,
- la masse des électrons est très faible par rapport à celle des nucléons, on peut donc la négliger dans le calcul.

Au final, la masse d'un atome vaut: $\boxed{m_{atome} = nb_{nucléons} * m_{nucléon}}$

<u>Remarque</u>: C'est pour cela que le nombre de nucléons, noté $A$ dans l'écriture ${^{A}_{Z}X}$, s'appelle le nombre de masse!

Pour trouver la masse d'une molécule, rien de plus simple, il suffit d'additionner les masses de chacun de ses atomes.

Et enfin, on peut trouver le nombre d'entités d'un échantillon de corps pur si on connaît sa masse. On calcule d'abord la masse d'une seule entité comme vu précédemment, puis on trouve : $\boxed{N = \frac{m_{échantillon}}{m_{entité}}}$

<u>Exemple</u>: J'étudie une bague en or pur pesant $10g$. Dans le tableau périodique je trouve pour l'or ${^{197}_{79}A_u}$, un atome contient donc 197 nucléons, ce qui signifie qu'il pèse $197 * 1.67 * 10^{-27} = 3.29 * 10^{-25}kg$

J'ai donc $N = \frac{10 * 10^{-3}}{3.29 * 10^{-25}} = 3.04 * 10^{22}$ atomes d'or dans cette bague. Notons que j'ai converti les $g$ en $kg$ car il faut que les deux masses soient dans la même unité.

## Masse molaire et masse volumique

La **masse molaire** $M$ correspond à la masse d’une mole d’une espèce chimique. Elle s’exprime en **g/mol**. Il s'agit d'une grandeur très pratique car 1 mole de nucléons pèse $1g$, la masse molaire d'un atome est donc identique à son nombre de masse.

<u>Exemples</u> :
- Hydrogène ${^{1}_{1}H}$: $M(H) = 1 g/mol$  
- Carbone ${^{12}_{6}C}$: $M(C) = 12 g/mol$  
- Oxygène ${^{16}_{8}O}$: $M(O) = 16 g/mol$  

Encore une fois, pour avoir la masse molaire d'une molécule, on additionne simplement les masses molaires de ses atomes, par exemple : $M(H_2O) = 2 * M(H) + 1 * M(O) = 2 + 16 = 18 g/mol$

On peut facilement relier la masse $m$ (en $g$), la masse molaire $M$ (en $g/mol$) et la quantité de matière $n$ (en $mol$): $\boxed{n = \frac{m}{M}}$ qu'on peut aussi utiliser dans le sens $\boxed{m = n \times M}$

Rappelons aussi les formules reliant la masse volumique $\rho$ (en $g/L$), la masse $m$ (en $g$) et le volume $V$ (en $L$) $\boxed{\rho = \frac{m}{V}}$, soit également $\boxed{V = \frac{m}{\rho}}$ ou encore $\boxed{m = \rho*V}$

<u>Rappel</u>: $1L=1dm^3$ et $1m^3=1000dm^3$ donc $1m^3=1000L$

## Concentration en quantité de matière et en masse

Pour finir, dans une solution, on définit la concentration, qui correspond respectivement à la quantité de matière ou à la masse d'une espèce présente dans le volume de solution.

Pour la concentration en quantité de matière $C$ (en $mol/L$), on a : $\boxed{C = \frac{n}{V}}$ ce qui donne $\boxed{n = C*V}$

Pour la concentration massique $C_m$ (en $g/L$), on a : $\boxed{C_m = \frac{m}{V}}$ ce qui donne $\boxed{m = C_m*V}$

On peut facilement passer de l'une à l'autre grâce à la masse molaire, en effet: $\boxed{C = \frac{C_m}{M}}$ soit $\boxed{C_m = C*M}$


<details>
<summary>Exercice</summary>

1. Calculer la quantité de matière dans $18g$ d’eau.  
2. Combien y a-t-il de molécules dans $1 \, mol$ ?  
3. Calculer la masse de $0{,}5 \, mol$ de dioxygène $O_2$.  
4. Quelle est la quantité de matière dans $2L$ d’une solution à $0{,}1 \, mol/L$ ?

</details>

<details>
<summary>Solution</summary>

1. $n = \frac{18}{18} = 1 \, mol$  
2. $6{,}02 \times 10^{23}$ molécules  
3. $M(O_2) = 32 \, g/mol \Rightarrow m = 0{,}5 \times 32 = 16g$  
4. $n = 0{,}1 \times 2 = 0{,}2 \, mol$

</details>