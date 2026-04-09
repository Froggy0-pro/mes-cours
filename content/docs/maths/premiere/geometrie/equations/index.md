---
title: "3) Équations cartésiennes"
---

## Équation cartésienne d'une droite

### Forme générale

Dans un repère, toute droite admet une **équation cartésienne** de la forme :

$$
\boxed{ax + by + c = 0}
$$

où $a$, $b$ et $c$ sont des nombres réels avec $(a; b) \neq (0; 0)$.

**Vecteur directeur :** Une droite d'équation $ax + by + c = 0$ admet $\vec{u} \begin{pmatrix} -b \\ a \end{pmatrix}$ comme vecteur directeur.

**Vecteur normal :** Un **vecteur normal** à la droite est un vecteur orthogonal à tout vecteur directeur. Pour l'équation $ax + by + c = 0$, le vecteur $\vec{n} \begin{pmatrix} a \\ b \end{pmatrix}$ est un vecteur normal.

**Exemple :** La droite d'équation $2x - 3y + 5 = 0$ a pour :
- Vecteur directeur : $\vec{u} \begin{pmatrix} 3 \\ 2 \end{pmatrix}$
- Vecteur normal : $\vec{n} \begin{pmatrix} 2 \\ -3 \end{pmatrix}$

---

### Cas particuliers

**Droite horizontale :** $y = k$ (ou $0x + 1y - k = 0$)
- Parallèle à l'axe des abscisses
- Vecteur directeur : $\vec{i} \begin{pmatrix} 1 \\ 0 \end{pmatrix}$

**Droite verticale :** $x = k$ (ou $1x + 0y - k = 0$)
- Parallèle à l'axe des ordonnées
- Vecteur directeur : $\vec{j} \begin{pmatrix} 0 \\ 1 \end{pmatrix}$

**Droite passant par l'origine :** $ax + by = 0$

---

### Équation réduite

Une droite **non verticale** peut s'écrire sous la forme :

$$
\boxed{y = mx + p}
$$

où :
- $m$ est le **coefficient directeur** (ou pente)
- $p$ est l'**ordonnée à l'origine** (intersection avec l'axe des ordonnées)

**Lien avec l'équation cartésienne :** Si $ax + by + c = 0$ avec $b \neq 0$ :

$$m = -\frac{a}{b} \quad \text{et} \quad p = -\frac{c}{b}$$

**Vecteur directeur :** Pour $y = mx + p$, un vecteur directeur est $\vec{u} \begin{pmatrix} 1 \\ m \end{pmatrix}$.

**Exemple :** L'équation $2x - 3y + 6 = 0$ devient :
$$-3y = -2x - 6$$
$$y = \frac{2}{3}x + 2$$

Donc $m = \frac{2}{3}$ et $p = 2$.

---

## Déterminer l'équation d'une droite

### Droite passant par un point de vecteur directeur donné

La droite passant par $A(x_A; y_A)$ de vecteur directeur $\vec{u} \begin{pmatrix} \alpha \\ \beta \end{pmatrix}$ a pour équation :

$$
\boxed{\beta(x - x_A) - \alpha(y - y_A) = 0}
$$

Ou avec un vecteur normal $\vec{n} \begin{pmatrix} a \\ b \end{pmatrix}$ :

$$
\boxed{a(x - x_A) + b(y - y_A) = 0}
$$

**Exemple :** Droite passant par $A(2; 3)$ de vecteur directeur $\vec{u} \begin{pmatrix} 4 \\ -1 \end{pmatrix}$ :

$$-1(x - 2) - 4(y - 3) = 0$$
$$-x + 2 - 4y + 12 = 0$$
$$-x - 4y + 14 = 0$$ ou $x + 4y - 14 = 0$

---

### Droite passant par deux points

La droite passant par $A(x_A; y_A)$ et $B(x_B; y_B)$ a pour vecteur directeur $\vec{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$.

Son équation est :

$$
\boxed{(y_B - y_A)(x - x_A) - (x_B - x_A)(y - y_A) = 0}
$$

**Exemple :** Droite passant par $A(1; 2)$ et $B(4; 5)$ :

$\vec{AB} \begin{pmatrix} 3 \\ 3 \end{pmatrix}$

$$3(x - 1) - 3(y - 2) = 0$$
$$3x - 3 - 3y + 6 = 0$$
$$3x - 3y + 3 = 0$$ ou $x - y + 1 = 0$

---

## Parallélisme et perpendicularité

### Droites parallèles

Deux droites $d$ et $d'$ d'équations $ax + by + c = 0$ et $a'x + b'y + c' = 0$ sont **parallèles** si et seulement si :

$$
\boxed{ab' - ba' = 0}
$$

**Cas particulier (forme réduite) :** $y = mx + p$ et $y = m'x + p'$ sont parallèles ssi $m = m'$.

**Exemple :** Les droites $2x + 3y - 1 = 0$ et $4x + 6y + 5 = 0$ sont parallèles car :
$$2 \times 6 - 3 \times 4 = 12 - 12 = 0$$ ✓

---

### Droites perpendiculaires

Deux droites sont **perpendiculaires** si leurs vecteurs directeurs (ou normaux) sont orthogonaux.

Deux droites $d$ et $d'$ d'équations $ax + by + c = 0$ et $a'x + b'y + c' = 0$ sont **perpendiculaires** ssi :

$$
\boxed{aa' + bb' = 0}
$$

**Cas particulier (forme réduite) :** $y = mx + p$ et $y = m'x + p'$ sont perpendiculaires ssi :

$$
\boxed{m \times m' = -1}
$$

**Exemple :** Les droites $y = 2x + 1$ et $y = -\frac{1}{2}x + 3$ sont perpendiculaires car :
$$2 \times \left(-\frac{1}{2}\right) = -1$$ ✓

---

## Équation cartésienne d'un cercle

### Forme générale

Un **cercle** de centre $\Omega(a; b)$ et de rayon $r$ a pour équation :

$$
\boxed{(x - a)^2 + (y - b)^2 = r^2}
$$

**Interprétation :** Un point $M(x; y)$ appartient au cercle si et seulement si $\Omega M = r$.

**Exemple :** Le cercle de centre $\Omega(2; -3)$ et de rayon $r = 5$ a pour équation :
$$(x - 2)^2 + (y + 3)^2 = 25$$

---

### Forme développée

En développant $(x - a)^2 + (y - b)^2 = r^2$, on obtient la **forme développée** :

$$
\boxed{x^2 + y^2 + \alpha x + \beta y + \gamma = 0}
$$

avec $\alpha = -2a$, $\beta = -2b$ et $\gamma = a^2 + b^2 - r^2$.

**Retrouver le centre et le rayon :** À partir de $x^2 + y^2 + \alpha x + \beta y + \gamma = 0$ :

$$a = -\frac{\alpha}{2} \quad ; \quad b = -\frac{\beta}{2} \quad ; \quad r = \sqrt{a^2 + b^2 - \gamma}$$

**Attention :** L'équation représente un cercle seulement si $a^2 + b^2 - \gamma > 0$ (sinon le rayon serait négatif ou nul).

**Exemple :** Déterminer le centre et le rayon du cercle d'équation $x^2 + y^2 - 4x + 6y - 3 = 0$.

$$a = -\frac{-4}{2} = 2 \quad ; \quad b = -\frac{6}{2} = -3$$
$$r^2 = 2^2 + (-3)^2 - (-3) = 4 + 9 + 3 = 16$$
$$r = 4$$

Centre : $\Omega(2; -3)$ et rayon $r = 4$.

---

## Intersection droite-cercle

Pour trouver les **points d'intersection** entre une droite et un cercle, on résout le système formé par leurs équations.

**Nombre de solutions :**
- **2 solutions** : la droite **coupe** le cercle en deux points (droite sécante)
- **1 solution** : la droite est **tangente** au cercle
- **0 solution** : la droite ne coupe pas le cercle (droite extérieure)

**Méthode :** 
1. Exprimer $y$ en fonction de $x$ (ou inversement) avec l'équation de la droite
2. Remplacer dans l'équation du cercle
3. Résoudre l'équation du second degré obtenue
4. Utiliser le discriminant pour déterminer le nombre de solutions

**Exemple :** Cherchons l'intersection du cercle $(x - 1)^2 + (y - 2)^2 = 5$ et de la droite $y = x$.

$$(x - 1)^2 + (x - 2)^2 = 5$$
$$x^2 - 2x + 1 + x^2 - 4x + 4 = 5$$
$$2x^2 - 6x + 5 = 5$$
$$2x^2 - 6x = 0$$
$$2x(x - 3) = 0$$

Solutions : $x = 0$ ou $x = 3$

Points d'intersection : $A(0; 0)$ et $B(3; 3)$.

---

## Tangente à un cercle

La **tangente** à un cercle $\mathcal{C}$ de centre $\Omega$ en un point $A$ du cercle est la droite :
- Passant par $A$
- Perpendiculaire au rayon $[\Omega A]$

**Vecteur normal :** $\vec{\Omega A}$ est un vecteur normal à la tangente.

**Équation de la tangente** en $A(x_A; y_A)$ au cercle de centre $\Omega(a; b)$ :

$$
\boxed{(x_A - a)(x - x_A) + (y_A - b)(y - y_A) = 0}
$$

**Exemple :** Tangente au cercle de centre $\Omega(1; 2)$ et de rayon $3$ au point $A(4; 2)$.

Vecteur normal : $\vec{\Omega A} \begin{pmatrix} 3 \\ 0 \end{pmatrix}$

Équation : $3(x - 4) + 0(y - 2) = 0$ donc $x = 4$.

---

## 📌 Formules à retenir

### Droites

| Type | Équation | Vecteur directeur |
|------|----------|-------------------|
| **Cartésienne** | $ax + by + c = 0$ | $\vec{u} \begin{pmatrix} -b \\ a \end{pmatrix}$ |
| **Réduite** | $y = mx + p$ | $\vec{u} \begin{pmatrix} 1 \\ m \end{pmatrix}$ |
| **Vecteur normal** | $a(x - x_A) + b(y - y_A) = 0$ | $\vec{n} \begin{pmatrix} a \\ b \end{pmatrix}$ |

### Cercles

| Type | Équation |
|------|----------|
| **Canonique** | $(x - a)^2 + (y - b)^2 = r^2$ |
| **Développée** | $x^2 + y^2 + \alpha x + \beta y + \gamma = 0$ |
| **Centre** | $\Omega\left(-\frac{\alpha}{2}; -\frac{\beta}{2}\right)$ |
| **Rayon** | $r = \sqrt{a^2 + b^2 - \gamma}$ |

### Conditions

| Propriété | Condition |
|-----------|-----------|
| **Droites parallèles** | $ab' - ba' = 0$ ou $m = m'$ |
| **Droites perpendiculaires** | $aa' + bb' = 0$ ou $m \times m' = -1$ |

---

## Exercices

<details>
<summary>Exercice 1 : Équation d'une droite</summary>

Déterminer l'équation cartésienne de la droite passant par $A(3; -1)$ et de vecteur directeur $\vec{u} \begin{pmatrix} 2 \\ 5 \end{pmatrix}$.

</details>

<details>
<summary>Solution exercice 1</summary>

Avec $\vec{u} \begin{pmatrix} 2 \\ 5 \end{pmatrix}$, l'équation est :

$$5(x - 3) - 2(y - (-1)) = 0$$
$$5x - 15 - 2y - 2 = 0$$
$$\boxed{5x - 2y - 17 = 0}$$

</details>

<details>
<summary>Exercice 2 : Droite passant par deux points</summary>

Déterminer l'équation de la droite passant par $A(-1; 4)$ et $B(3; 2)$.

Donner l'équation sous forme réduite.

</details>

<details>
<summary>Solution exercice 2</summary>

$\vec{AB} \begin{pmatrix} 3 - (-1) \\ 2 - 4 \end{pmatrix} = \begin{pmatrix} 4 \\ -2 \end{pmatrix}$

$$-2(x - (-1)) - 4(y - 4) = 0$$
$$-2x - 2 - 4y + 16 = 0$$
$$-2x - 4y + 14 = 0$$
$$2x + 4y - 14 = 0$$ ou $x + 2y - 7 = 0$

**Forme réduite :** $2y = -x + 7$ donc $\boxed{y = -\frac{1}{2}x + \frac{7}{2}}$

</details>

<details>
<summary>Exercice 3 : Parallélisme</summary>

Les droites $d: 3x - 2y + 5 = 0$ et $d': 6x - 4y - 1 = 0$ sont-elles parallèles ?

</details>

<details>
<summary>Solution exercice 3</summary>

Vérifions si $ab' - ba' = 0$ :

$$3 \times (-4) - (-2) \times 6 = -12 + 12 = 0$$

**Oui**, les droites sont parallèles.

</details>

<details>
<summary>Exercice 4 : Perpendicularité</summary>

Déterminer l'équation de la droite passant par $A(2; 5)$ et perpendiculaire à la droite $d: x + 3y - 4 = 0$.

</details>

<details>
<summary>Solution exercice 4</summary>

La droite $d$ a pour vecteur normal $\vec{n} \begin{pmatrix} 1 \\ 3 \end{pmatrix}$, donc pour vecteur directeur $\vec{u} \begin{pmatrix} -3 \\ 1 \end{pmatrix}$.

La droite perpendiculaire à $d$ a donc pour vecteur directeur $\vec{n} \begin{pmatrix} 1 \\ 3 \end{pmatrix}$.

Équation :
$$3(x - 2) - 1(y - 5) = 0$$
$$3x - 6 - y + 5 = 0$$
$$\boxed{3x - y - 1 = 0}$$

</details>

<details>
<summary>Exercice 5 : Équation de cercle</summary>

Déterminer l'équation du cercle de centre $\Omega(-2; 3)$ et de rayon $r = 4$.

</details>

<details>
<summary>Solution exercice 5</summary>

$$\boxed{(x + 2)^2 + (y - 3)^2 = 16}$$

**Forme développée :**
$$x^2 + 4x + 4 + y^2 - 6y + 9 = 16$$
$$x^2 + y^2 + 4x - 6y - 3 = 0$$

</details>

<details>
<summary>Exercice 6 : Centre et rayon</summary>

Déterminer le centre et le rayon du cercle d'équation $x^2 + y^2 + 6x - 8y + 9 = 0$.

</details>

<details>
<summary>Solution exercice 6</summary>

$$a = -\frac{6}{2} = -3 \quad ; \quad b = -\frac{-8}{2} = 4$$

$$r^2 = (-3)^2 + 4^2 - 9 = 9 + 16 - 9 = 16$$
$$r = 4$$

Centre : $\boxed{\Omega(-3; 4)}$ et rayon $\boxed{r = 4}$

</details>

<details>
<summary>Exercice 7 : Intersection droite-cercle</summary>

Déterminer les points d'intersection du cercle $x^2 + y^2 = 25$ et de la droite $y = x + 1$.

</details>

<details>
<summary>Solution exercice 7</summary>

On remplace $y = x + 1$ dans l'équation du cercle :

$$x^2 + (x + 1)^2 = 25$$
$$x^2 + x^2 + 2x + 1 = 25$$
$$2x^2 + 2x - 24 = 0$$
$$x^2 + x - 12 = 0$$

$\Delta = 1 + 48 = 49$

$$x_1 = \frac{-1 - 7}{2} = -4 \quad ; \quad x_2 = \frac{-1 + 7}{2} = 3$$

Points : $\boxed{A(-4; -3) \text{ et } B(3; 4)}$

</details>

<details>
<summary>Exercice 8 : Tangente à un cercle</summary>

Déterminer l'équation de la tangente au cercle $(x - 1)^2 + (y + 2)^2 = 10$ au point $A(4; -1)$.

</details>

<details>
<summary>Solution exercice 8</summary>

Centre : $\Omega(1; -2)$

Vecteur normal : $\vec{\Omega A} \begin{pmatrix} 4 - 1 \\ -1 - (-2) \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$

Équation :
$$3(x - 4) + 1(y - (-1)) = 0$$
$$3x - 12 + y + 1 = 0$$
$$\boxed{3x + y - 11 = 0}$$

</details>

<details>
<summary>Exercice 9 : Problème complet</summary>

Soit le cercle $\mathcal{C}$ d'équation $x^2 + y^2 - 4x + 2y - 20 = 0$.

1. Déterminer le centre $\Omega$ et le rayon $r$ de $\mathcal{C}$.
2. Le point $A(5; 3)$ appartient-il à $\mathcal{C}$ ?
3. Déterminer l'équation de la tangente à $\mathcal{C}$ en $A$.

</details>

<details>
<summary>Solution exercice 9</summary>

1. $a = -\frac{-4}{2} = 2$ ; $b = -\frac{2}{2} = -1$
   
   $r^2 = 2^2 + (-1)^2 - (-20) = 4 + 1 + 20 = 25$
   
   $\boxed{\Omega(2; -1) \text{ et } r = 5}$

2. Vérifions si $(5 - 2)^2 + (3 - (-1))^2 = 25$ :
   
   $3^2 + 4^2 = 9 + 16 = 25$ ✓
   
   **Oui**, $A$ appartient à $\mathcal{C}$.

3. $\vec{\Omega A} \begin{pmatrix} 3 \\ 4 \end{pmatrix}$
   
   Équation de la tangente :
   $$3(x - 5) + 4(y - 3) = 0$$
   $$3x - 15 + 4y - 12 = 0$$
   $$\boxed{3x + 4y - 27 = 0}$$

</details>

---

## ⚠️ Pièges à éviter

❌ **Confondre vecteur directeur et vecteur normal** : $ax + by + c = 0$ a pour vecteur **directeur** $\vec{u} \begin{pmatrix} -b \\ a \end{pmatrix}$ et vecteur **normal** $\vec{n} \begin{pmatrix} a \\ b \end{pmatrix}$

❌ **Oublier le signe moins** dans $a = -\frac{\alpha}{2}$ pour le centre du cercle

❌ **Ne pas vérifier** $a^2 + b^2 - \gamma > 0$ : sinon ce n'est pas un cercle !

❌ **Confondre les conditions** : parallèles → $ab' - ba' = 0$ ; perpendiculaires → $aa' + bb' = 0$

❌ **Oublier le carré** dans l'équation du cercle : c'est $(x - a)^2 + (y - b)^2 = r^2$ et pas $r$

❌ **Se tromper dans la tangente** : le vecteur $\vec{\Omega A}$ est un vecteur **normal** à la tangente (pas directeur)