---
title: "1) Second degré"
---

## Forme développée et forme canonique

Une **fonction polynôme du second degré** s'écrit sous la forme générale : $\boxed{f(x) = ax^2 + bx + c}$ où $a \neq 0$, et $a$, $b$, $c$ sont des nombres réels.

La représentation graphique d'un polynôme de second degré est une parabole, dont le sens dépend du signe de $a$:

- si $a > 0$: la parabole est tournée vers le **haut** (∪), la fonction est donc décroissante puis croissante et elle admet un **minimum**.

- si $a < 0$: la parabole est tournée vers le **bas** (∩), la fonction est donc croissante puis décroissante et elle admet un **maximum**.

Dans les deux cas, la parabole admet un **sommet** de coordonnées $(\alpha; \beta)$ avec $\boxed{\alpha = -\frac{b}{2a}}$ et $\boxed{\beta = f(\alpha)}$ la fonction présente donc un **axe de symétrie** vertical d'équation $x=\alpha$.

<div class="center">
<img src="/images/maths/parabole.png" alt="Sens de la parabole" width="600">
</div>

On peut écrire l'expression d'une fonction polynôme de degré 2 sous une forme alternative, la **forme canonique**: $\boxed{f(x) = a(x - \alpha)^2 + \beta}$

<details>
<summary>Exercice 1 : Forme canonique</summary>

Mettre sous forme canonique $f(x) = x^2 + 6x + 7$.

</details>

<details>
<summary>Solution exercice 1</summary>

$a = 1$, $b = 6$, $c = 7$

$\alpha = -\frac{6}{2 \times 1} = -3$

$\beta = f(-3) = (-3)^2 + 6(-3) + 7 = 9 - 18 + 7 = -2$

Donc : $\boxed{f(x) = (x + 3)^2 - 2}$

Le sommet est $S(-3; -2)$.

</details>

## Résoudre une équation du second degré

Dans un premier temps, intéressons-nous à deux cas particuliers:

- si $b=0$: 

- si $c=0$: 

## Discriminant, racines et forme factorisée

Dans le cas général, on veut toujours résoudre une équation du second degré en partant de l'expression $ax^2 + bx + c = 0$.

Dans un premier temps, on calcule le discriminant $
\boxed{\Delta = b^2 - 4ac}
$

Le signe de $\Delta$ détermine le nombre de solutions, qu'on appelle aussi **racines** du polynôme. Ces racines correspondent aux points d'intersection entre la courbe représentative de la fonction et l'axe des abscisses.


- si $\Delta > 0$, l'équation admet **deux racines distinctes**: $\boxed{x_1 = \frac{-b - \sqrt{\Delta}}{2a}}$ et $\boxed{x_2 = \frac{-b + \sqrt{\Delta}}{2a}}$

- si $\Delta = 0$, l'équation admet **une racine double** qui est également le sommet de la parabole: $\boxed{x_0 = -\frac{b}{2a} = \alpha}$

- si $\Delta < 0$: l'équation n'admet **aucune racine réelle**: il n'y a pas de solution dans $\mathbb{R}$.



Quand $\Delta \geq 0$, on peut factoriser le polynôme et ainsi obtenir une troisième forme, la **forme factorisée**:

- si $\Delta > 0$: $\boxed{f(x) = a(x - x_1)(x - x_2)}$

- si $\Delta = 0$: $\boxed{f(x) = a(x - x_0)^2}$

## Tableau de signe

Le signe de $f(x) = ax^2 + bx + c$ dépend du signe de $a$ et de $\Delta$ :

### Cas $\Delta > 0$ (deux racines $x_1 < x_2$)

- Si $a > 0$ : $f(x)$ est **positif** à l'extérieur des racines, **négatif** entre les racines

| $x$ | $-\infty$ | | $x_1$ | | $x_2$ | | $+\infty$ |
|-----|-----------|---|-------|---|-------|---|-----------|
| $f(x)$ | $+$ | | $0$ | $-$ | $0$ | | $+$ |

- Si $a < 0$ : $f(x)$ est **négatif** à l'extérieur, **positif** entre les racines

| $x$ | $-\infty$ | | $x_1$ | | $x_2$ | | $+\infty$ |
|-----|-----------|---|-------|---|-------|---|-----------|
| $f(x)$ | $-$ | | $0$ | $+$ | $0$ | | $-$ |

### Cas $\Delta = 0$ (une racine double $x_0$)

$f(x)$ est **toujours du signe de $a$** (sauf en $x_0$ où $f(x_0) = 0$)

### Cas $\Delta < 0$ (pas de racine)

$f(x)$ est **toujours du signe de $a$**

**Exemple :** Pour $f(x) = -x^2 + 5x - 6 = -(x - 2)(x - 3)$ avec $a = -1 < 0$ :

| $x$ | $-\infty$ | | $2$ | | $3$ | | $+\infty$ |
|-----|-----------|---|-----|---|-----|---|-----------|
| $f(x)$ | $-$ | | $0$ | $+$ | $0$ | | $-$ |



## Exercices



<details>
<summary>Exercice 2 : Résolution d'équation</summary>

Résoudre $2x^2 - 7x + 3 = 0$.

</details>

<details>
<summary>Solution exercice 2</summary>

$a = 2$, $b = -7$, $c = 3$

$\Delta = (-7)^2 - 4 \times 2 \times 3 = 49 - 24 = 25 > 0$

Deux solutions :

$x_1 = \frac{7 - \sqrt{25}}{2 \times 2} = \frac{7 - 5}{4} = \frac{2}{4} = \frac{1}{2}$

$x_2 = \frac{7 + \sqrt{25}}{4} = \frac{7 + 5}{4} = \frac{12}{4} = 3$

$\boxed{S = \left\{\frac{1}{2}; 3\right\}}$

</details>

<details>
<summary>Exercice 3 : Signe d'un trinôme</summary>

Étudier le signe de $f(x) = -x^2 + 4x - 3$.

</details>

<details>
<summary>Solution exercice 3</summary>

$a = -1$, $b = 4$, $c = -3$

Cherchons les racines :

$\Delta = 4^2 - 4 \times (-1) \times (-3) = 16 - 12 = 4 > 0$

$x_1 = \frac{-4 - 2}{-2} = \frac{-6}{-2} = 3$

$x_2 = \frac{-4 + 2}{-2} = \frac{-2}{-2} = 1$

Comme $a = -1 < 0$, le trinôme est négatif à l'extérieur et positif entre les racines :

| $x$ | $-\infty$ | | $1$ | | $3$ | | $+\infty$ |
|-----|-----------|---|-----|---|-----|---|-----------|
| $f(x)$ | $-$ | | $0$ | $+$ | $0$ | | $-$ |

$f(x) \geq 0$ sur $[1; 3]$ et $f(x) \leq 0$ sur $]-\infty; 1] \cup [3; +\infty[$

</details>

<details>
<summary>Exercice 4 : Problème complet</summary>

Soit $f(x) = x^2 - 2x - 8$.

1. Calculer le discriminant et résoudre $f(x) = 0$.
2. Donner la forme factorisée de $f(x)$.
3. Déterminer le sommet de la parabole.
4. Étudier le signe de $f(x)$.
5. Donner le tableau de variations de $f$.

</details>

<details>
<summary>Solution exercice 4</summary>

1. $\Delta = (-2)^2 - 4 \times 1 \times (-8) = 4 + 32 = 36 > 0$
   
   $x_1 = \frac{2 - 6}{2} = -2$ et $x_2 = \frac{2 + 6}{2} = 4$

2. $f(x) = (x + 2)(x - 4)$

3. $\alpha = -\frac{-2}{2 \times 1} = 1$
   
   $\beta = f(1) = 1 - 2 - 8 = -9$
   
   Sommet : $S(1; -9)$

4. Comme $a = 1 > 0$ et $\Delta > 0$ avec racines $-2$ et $4$ :
   
   | $x$ | $-\infty$ | | $-2$ | | $4$ | | $+\infty$ |
   |-----|-----------|---|------|---|-----|---|-----------|
   | $f(x)$ | $+$ | | $0$ | $-$ | $0$ | | $+$ |

5. Tableau de variations ($a > 0$, minimum en $\alpha = 1$) :
   
   | $x$ | $-\infty$ | | $1$ | | $+\infty$ |
   |-----|-----------|---|-----|---|-----------|
   | $f(x)$ | | ↘ | $-9$ | ↗ | |

</details>

<details>
<summary>Exercice 5 : Intersection avec un axe</summary>

Déterminer les coordonnées des points d'intersection de la parabole d'équation $y = -2x^2 + 5x + 3$ avec :
1. L'axe des abscisses
2. L'axe des ordonnées

</details>

<details>
<summary>Solution exercice 5</summary>

1. Intersection avec l'axe des abscisses : résoudre $-2x^2 + 5x + 3 = 0$
   
   $\Delta = 5^2 - 4 \times (-2) \times 3 = 25 + 24 = 49$
   
   $x_1 = \frac{-5 - 7}{-4} = \frac{-12}{-4} = 3$
   
   $x_2 = \frac{-5 + 7}{-4} = \frac{2}{-4} = -\frac{1}{2}$
   
   Points : $\boxed{A\left(-\frac{1}{2}; 0\right) \text{ et } B(3; 0)}$

2. Intersection avec l'axe des ordonnées : poser $x = 0$
   
   $y = -2(0)^2 + 5(0) + 3 = 3$
   
   Point : $\boxed{C(0; 3)}$

</details>
