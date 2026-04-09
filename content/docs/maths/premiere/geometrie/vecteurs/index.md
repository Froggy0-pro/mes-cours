---
title: "1) Rappels sur les vecteurs"
---

## Définition et notation

Un **vecteur** est défini par :
- Une **direction** (droite support)
- Un **sens** (orientation sur cette droite)
- Une **norme** (longueur)

**Notation :** $\vec{AB}$ désigne le vecteur d'origine $A$ et d'extrémité $B$.

Deux vecteurs sont **égaux** s'ils ont même direction, même sens et même norme.

**Vecteur nul :** $\vec{0}$ a une norme nulle (tous ses points sont confondus).

---

## Coordonnées d'un vecteur

Dans un repère $(O; \vec{i}, \vec{j})$, si $A(x_A; y_A)$ et $B(x_B; y_B)$, alors :

$$
\boxed{\vec{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}}
$$

**Exemple :** Si $A(1; 3)$ et $B(4; 7)$ :

$$\vec{AB} \begin{pmatrix} 4 - 1 \\ 7 - 3 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

---

## Opérations sur les vecteurs

### Addition de vecteurs (relation de Chasles)

$$
\boxed{\vec{AB} + \vec{BC} = \vec{AC}}
$$

**En coordonnées :** Si $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$, alors :

$$
\boxed{\vec{u} + \vec{v} = \begin{pmatrix} x + x' \\ y + y' \end{pmatrix}}
$$

### Multiplication par un scalaire

Si $k$ est un nombre réel :

$$
\boxed{k\vec{u} = \begin{pmatrix} kx \\ ky \end{pmatrix}}
$$

**Propriétés :**
- Si $k > 0$ : $k\vec{u}$ a le **même sens** que $\vec{u}$
- Si $k < 0$ : $k\vec{u}$ a le **sens opposé** à $\vec{u}$
- La norme est multipliée par $|k|$

**Exemple :** Si $\vec{u} \begin{pmatrix} 2 \\ -3 \end{pmatrix}$, alors $3\vec{u} = \begin{pmatrix} 6 \\ -9 \end{pmatrix}$ et $-2\vec{u} = \begin{pmatrix} -4 \\ 6 \end{pmatrix}$

---

## Norme d'un vecteur

La **norme** (ou longueur) d'un vecteur $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ est :

$$
\boxed{\|\vec{u}\| = \sqrt{x^2 + y^2}}
$$

**Cas particulier :** La distance entre deux points $A(x_A; y_A)$ et $B(x_B; y_B)$ est :

$$
\boxed{AB = \|\vec{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}}
$$

**Exemple :** Si $\vec{u} \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ :

$$\|\vec{u}\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

---

## Coordonnées du milieu

Si $I$ est le **milieu** du segment $[AB]$ avec $A(x_A; y_A)$ et $B(x_B; y_B)$ :

$$
\boxed{I\left(\frac{x_A + x_B}{2}; \frac{y_A + y_B}{2}\right)}
$$

**Exemple :** Le milieu de $[AB]$ avec $A(2; 5)$ et $B(6; 1)$ est :

$$I\left(\frac{2 + 6}{2}; \frac{5 + 1}{2}\right) = I(4; 3)$$

---

## Colinéarité de deux vecteurs

Deux vecteurs $\vec{u}$ et $\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\vec{u} = k\vec{v}$ (ou $\vec{v} = k\vec{u}$).

**Interprétation géométrique :** $\vec{u}$ et $\vec{v}$ sont colinéaires ⟺ ils ont la **même direction**.

### Critère avec les coordonnées

Si $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$, ils sont colinéaires si et seulement si :

$$
\boxed{xy' - yx' = 0}
$$

Ce nombre $xy' - yx'$ s'appelle le **déterminant** des vecteurs $\vec{u}$ et $\vec{v}$.

**Exemple :** $\vec{u} \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 4 \\ 6 \end{pmatrix}$ sont-ils colinéaires ?

$2 \times 6 - 3 \times 4 = 12 - 12 = 0$ ✓ Donc oui, ils sont colinéaires (en fait $\vec{v} = 2\vec{u}$).

---

## Applications de la colinéarité

### Alignement de trois points

**Trois points $A$, $B$ et $C$ sont alignés** si et seulement si les vecteurs $\vec{AB}$ et $\vec{AC}$ sont **colinéaires**.

**Exemple :** $A(1; 2)$, $B(3; 5)$, $C(5; 8)$ sont-ils alignés ?

$\vec{AB} \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ et $\vec{AC} \begin{pmatrix} 4 \\ 6 \end{pmatrix}$

$2 \times 6 - 3 \times 4 = 0$ ✓ Donc $A$, $B$ et $C$ sont alignés.

### Parallélisme de deux droites

**Deux droites $(AB)$ et $(CD)$ sont parallèles** si et seulement si les vecteurs $\vec{AB}$ et $\vec{CD}$ sont **colinéaires**.

---

## Vecteur directeur d'une droite

Un **vecteur directeur** d'une droite est un vecteur non nul qui a la même direction que cette droite.

**Propriété :** Si $\vec{u} \begin{pmatrix} a \\ b \end{pmatrix}$ est un vecteur directeur de la droite $d$, alors tout vecteur $k\vec{u}$ (avec $k \neq 0$) est aussi un vecteur directeur de $d$.

**Équation cartésienne :** Une droite de vecteur directeur $\vec{u} \begin{pmatrix} a \\ b \end{pmatrix}$ passant par $A(x_A; y_A)$ a pour équation :

$$
\boxed{b(x - x_A) - a(y - y_A) = 0}
$$

Ou sous forme réduite : $-bx + ay + c = 0$ avec $c = bx_A - ay_A$.

**Cas particulier :** Une droite d'équation $ax + by + c = 0$ admet $\vec{u} \begin{pmatrix} -b \\ a \end{pmatrix}$ comme vecteur directeur.

---

## 📌 Formules à retenir

| Concept | Formule |
|---------|---------|
| **Coordonnées de $\vec{AB}$** | $\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$ |
| **Norme** | $\|\vec{u}\| = \sqrt{x^2 + y^2}$ |
| **Distance $AB$** | $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ |
| **Milieu de $[AB]$** | $I\left(\frac{x_A + x_B}{2}; \frac{y_A + y_B}{2}\right)$ |
| **Somme de vecteurs** | $\vec{u} + \vec{v} = \begin{pmatrix} x + x' \\ y + y' \end{pmatrix}$ |
| **Multiplication par $k$** | $k\vec{u} = \begin{pmatrix} kx \\ ky \end{pmatrix}$ |
| **Colinéarité** | $xy' - yx' = 0$ |
| **Relation de Chasles** | $\vec{AB} + \vec{BC} = \vec{AC}$ |

---

## Exercices

<details>
<summary>Exercice 1 : Coordonnées et norme</summary>

Soit $A(-1; 2)$ et $B(3; 5)$.

1. Calculer les coordonnées de $\vec{AB}$.
2. Calculer la norme de $\vec{AB}$ (distance $AB$).

</details>

<details>
<summary>Solution exercice 1</summary>

1. $\vec{AB} \begin{pmatrix} 3 - (-1) \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$

2. $AB = \|\vec{AB}\| = \sqrt{4^2 + 3^2} = \sqrt{16 + 9} = \sqrt{25} = 5$

</details>

<details>
<summary>Exercice 2 : Milieu</summary>

Déterminer les coordonnées du milieu $I$ du segment $[AB]$ avec $A(-2; 7)$ et $B(4; -1)$.

</details>

<details>
<summary>Solution exercice 2</summary>

$$I\left(\frac{-2 + 4}{2}; \frac{7 + (-1)}{2}\right) = I\left(\frac{2}{2}; \frac{6}{2}\right) = \boxed{I(1; 3)}$$

</details>

<details>
<summary>Exercice 3 : Opérations sur les vecteurs</summary>

Soit $\vec{u} \begin{pmatrix} 2 \\ -3 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} -1 \\ 4 \end{pmatrix}$.

Calculer :
1. $\vec{u} + \vec{v}$
2. $3\vec{u}$
3. $2\vec{u} - \vec{v}$

</details>

<details>
<summary>Solution exercice 3</summary>

1. $\vec{u} + \vec{v} = \begin{pmatrix} 2 + (-1) \\ -3 + 4 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

2. $3\vec{u} = \begin{pmatrix} 3 \times 2 \\ 3 \times (-3) \end{pmatrix} = \begin{pmatrix} 6 \\ -9 \end{pmatrix}$

3. $2\vec{u} - \vec{v} = 2\begin{pmatrix} 2 \\ -3 \end{pmatrix} - \begin{pmatrix} -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 4 \\ -6 \end{pmatrix} + \begin{pmatrix} 1 \\ -4 \end{pmatrix} = \begin{pmatrix} 5 \\ -10 \end{pmatrix}$

</details>

<details>
<summary>Exercice 4 : Colinéarité</summary>

Les vecteurs $\vec{u} \begin{pmatrix} 6 \\ -9 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} -4 \\ 6 \end{pmatrix}$ sont-ils colinéaires ?

</details>

<details>
<summary>Solution exercice 4</summary>

Calculons le déterminant :

$6 \times 6 - (-9) \times (-4) = 36 - 36 = 0$

**Oui**, les vecteurs sont colinéaires. En fait, $\vec{v} = -\frac{2}{3}\vec{u}$.

</details>

<details>
<summary>Exercice 5 : Alignement</summary>

Les points $A(1; 2)$, $B(4; 5)$ et $C(7; 8)$ sont-ils alignés ?

</details>

<details>
<summary>Solution exercice 5</summary>

Calculons $\vec{AB}$ et $\vec{AC}$ :

$\vec{AB} \begin{pmatrix} 4 - 1 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 3 \end{pmatrix}$

$\vec{AC} \begin{pmatrix} 7 - 1 \\ 8 - 2 \end{pmatrix} = \begin{pmatrix} 6 \\ 6 \end{pmatrix}$

Déterminant : $3 \times 6 - 3 \times 6 = 18 - 18 = 0$

**Oui**, $A$, $B$ et $C$ sont alignés (on a $\vec{AC} = 2\vec{AB}$).

</details>

<details>
<summary>Exercice 6 : Parallélisme</summary>

Les droites $(AB)$ et $(CD)$ sont-elles parallèles ?

$A(1; 3)$, $B(4; 7)$, $C(2; 1)$, $D(8; 9)$

</details>

<details>
<summary>Solution exercice 6</summary>

$\vec{AB} \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ et $\vec{CD} \begin{pmatrix} 6 \\ 8 \end{pmatrix}$

Déterminant : $3 \times 8 - 4 \times 6 = 24 - 24 = 0$

**Oui**, les droites sont parallèles (car $\vec{CD} = 2\vec{AB}$).

</details>

<details>
<summary>Exercice 7 : Problème complet</summary>

Soit $A(-2; 1)$, $B(4; 4)$ et $C(1; -2)$.

1. Calculer les coordonnées de $\vec{AB}$ et $\vec{AC}$.
2. Les points $A$, $B$, $C$ sont-ils alignés ?
3. Calculer les coordonnées du milieu $M$ de $[BC]$.
4. Calculer $AM$.

</details>

<details>
<summary>Solution exercice 7</summary>

1. $\vec{AB} \begin{pmatrix} 4 - (-2) \\ 4 - 1 \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \end{pmatrix}$
   
   $\vec{AC} \begin{pmatrix} 1 - (-2) \\ -2 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ -3 \end{pmatrix}$

2. Déterminant : $6 \times (-3) - 3 \times 3 = -18 - 9 = -27 \neq 0$
   
   **Non**, les points ne sont pas alignés.

3. $M\left(\frac{4 + 1}{2}; \frac{4 + (-2)}{2}\right) = M\left(\frac{5}{2}; 1\right)$

4. $\vec{AM} \begin{pmatrix} \frac{5}{2} - (-2) \\ 1 - 1 \end{pmatrix} = \begin{pmatrix} \frac{9}{2} \\ 0 \end{pmatrix}$
   
   $AM = \sqrt{\left(\frac{9}{2}\right)^2 + 0^2} = \frac{9}{2} = 4{,}5$

</details>

<details>
<summary>Exercice 8 : Construction d'un point</summary>

Dans un repère, on donne $A(2; 3)$ et $\vec{u} \begin{pmatrix} 4 \\ -1 \end{pmatrix}$.

Déterminer les coordonnées du point $B$ tel que $\vec{AB} = \vec{u}$.

</details>

<details>
<summary>Solution exercice 8</summary>

On a $\vec{AB} \begin{pmatrix} x_B - 2 \\ y_B - 3 \end{pmatrix} = \begin{pmatrix} 4 \\ -1 \end{pmatrix}$

Donc :
- $x_B - 2 = 4 \Rightarrow x_B = 6$
- $y_B - 3 = -1 \Rightarrow y_B = 2$

$\boxed{B(6; 2)}$

</details>

---

## ⚠️ Pièges à éviter

❌ **Inverser les coordonnées** : $\vec{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$ et **pas** $\begin{pmatrix} x_A - x_B \\ y_A - y_B \end{pmatrix}$

❌ **Oublier la racine carrée** dans le calcul de la norme : $\|\vec{u}\| = \sqrt{x^2 + y^2}$ et pas $x^2 + y^2$

❌ **Confondre colinéarité et orthogonalité** : deux vecteurs colinéaires ont la même **direction**, pas forcément le même sens

❌ **Se tromper dans le déterminant** : c'est $xy' - yx'$ (produit en croix avec signe -)

❌ **Oublier de diviser par 2** pour le milieu

❌ **Confondre $\vec{AB}$ et $AB$** : $\vec{AB}$ est un vecteur, $AB$ est une distance (nombre positif)