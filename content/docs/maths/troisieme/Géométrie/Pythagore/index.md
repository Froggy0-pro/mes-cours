---
title: "1) Pythagore"
weight: 1
---
## Théorème de Pythagore

Un **triangle rectangle** possède un angle droit (angle de $90°$). Le côté opposé à cet angle, qui est forcément le plus long des trois côtés, est appelé **hypoténuse**.

Dans un triangle rectangle, le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés. C'est le **théorème de Pythagore.**

<div style="text-align: left; margin: 1.5rem;">

<svg width="220" height="180" viewBox="0 0 220 180">
  <polygon points="40,140 180,140 40,40" fill="none" stroke="black" stroke-width="2"/>
  <text x="30" y="155">A</text>
  <text x="185" y="155">B</text>
  <text x="30" y="35">C</text>
  
  <!-- angle droit -->
  <rect x="40" y="120" width="20" height="20" fill="none" stroke="black"/>
  

</svg>

</div>

Ainsi, si un triangle est rectangle en $A$ :

$\boxed{BC^2 = AB^2 + AC^2}$

Cette formule permet de **calculer une des longueurs d'un triangle rectangle** à condition de connaître les deux autres. En effet, on peut adapter la formule précédente pour trouver $\boxed{AC^2 = BC^2 - AB^2}$ et $\boxed{AB^2 = BC^2 - AC^2}$. On n'oubliera pas d'appliquer une <u>racine carrée</u> au calcul pour passer du carré de la longueur à la longueur elle-même.

<u>Exemple d'énoncé</u>: Soit ABC un triangle rectangle en A tel que $AB = 3cm$  et $AC = 4cm$, trouver la longueur $BC$.

<u>Rédaction</u>: Le triangle ABC est rectangle en A. D'après le théorème de Pythagore, $BC^2 = AB^2 + AC^2$. Donc $BC^2 = 3^2 + 4^2 = 9 + 16 = 25$. Soit $BC = \sqrt{25} = 5cm$

## Réciproque et contraposée du théorème

Dans le sens classique de Pythagore, on utilise le fait qu'un triangle soit rectangle pour justifier que l'on a le droit d'utiliser la formule. Cependant, on peut faire le chemin inverse, c'est-à-dire montrer que l'égalité vue précédemment est vérifiée dans un triangle pour démontrer que celui-ci est rectangle. Dans ce sens, c'est la **réciproque** du théorème.

<u>Exemple d'énoncé</u>: Soit ABC un triangle tel que $AB = 8cm$, $AC = 10cm$  et $BC = 6cm$, le triangle ABC est-il rectangle?

<u>Rédaction</u>: Dans le triangle ABC, le côté le plus long est $AC$. De plus, on a $AC^2 = 100$. D'autre part, $AB^2 + BC^2 = 8^2 + 6^2 = 64 + 36 = 100$. On a $AC^2 = AB^2 + BC^2$, d'après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en B.

Si on avait trouvé que $AC^2 \neq AB^2 + BC^2$, on aurait alors conclu que le triangle n'était pas rectangle grâce à la **contraposée** du théorème de Pythagore.

<details>
<summary>Exercice</summary>

1. Vérifier si un triangle de côtés $5$, $12$ et $13$ est rectangle.  
2. Vérifier si un triangle de côtés $4$, $5$ et $6$ est rectangle.  

</details>

<details>
<summary>Solution</summary>

1. $13^2 = 169$ et $5^2 + 12^2 = 25 + 144 = 169$ → rectangle  
2. $6^2 = 36$ et $4^2 + 5^2 = 16 + 25 = 41$ → pas rectangle  

</details>





