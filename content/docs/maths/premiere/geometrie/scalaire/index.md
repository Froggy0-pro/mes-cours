---
title: "2) Produit scalaire"
---

## Définition avec le cosinus

Le **produit scalaire** de deux vecteurs $\vec{u}$ et $\vec{v}$ est un **nombre réel** noté $\vec{u} \cdot \vec{v}$ défini par :

$$
\boxed{\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})}
$$

où $(\vec{u}, \vec{v})$ est l'**angle** entre les deux vecteurs.

**Cas particuliers :**
- Si $\vec{u}$ et $\vec{v}$ sont **orthogonaux** : $\vec{u} \cdot \vec{v} = 0$ (car $\cos 90° = 0$)
- Si $\vec{u}$ et $\vec{v}$ sont **colinéaires de même sens** : $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\|$ (car $\cos 0° = 1$)
- Si $\vec{u}$ et $\vec{v}$ sont **colinéaires de sens opposés** : $\vec{u} \cdot \vec{v} = -\|\vec{u}\| \times \|\vec{v}\|$ (car $\cos 180° = -1$)

**Exemple :** Si $\|\vec{u}\| = 3$, $\|\vec{v}\| = 5$ et l'angle entre eux vaut $60°$ :

$$\vec{u} \cdot \vec{v} = 3 \times 5 \times \cos(60°) = 15 \times \frac{1}{2} = 7{,}5$$

---

## Produit scalaire avec un projeté orthogonal

Si $H$ est le **projeté orthogonal** de $C$ sur la droite $(AB)$ :

$$
\boxed{\vec{AB} \cdot \vec{AC} = \vec{AB} \cdot \vec{AH} = AB \times AH}
$$

**Attention au signe :**
- Si $H$ est du **même côté** que $B$ par rapport à $A$ : $\vec{AB} \cdot \vec{AH} = AB \times AH$
- Si $H$ est du **côté opposé** à $B$ par rapport à $A$ : $\vec{AB} \cdot \vec{AH} = -AB \times AH$

**Cas particulier (carré scalaire) :**

$$
\boxed{\vec{u} \cdot \vec{u} = \|\vec{u}\|^2}
$$

**Exemple :** Si $AB = 6$ et $AH = 4$ (avec $H$ entre $A$ et $B$) :

$$\vec{AB} \cdot \vec{AC} = 6 \times 4 = 24$$

---

## Formule avec les coordonnées

Si $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ dans un repère **orthonormé** :

$$
\boxed{\vec{u} \cdot \vec{v} = xx' + yy'}
$$

**Conséquence :** La norme d'un vecteur peut s'écrire :

$$
\boxed{\|\vec{u}\| = \sqrt{\vec{u} \cdot \vec{u}} = \sqrt{x^2 + y^2}}
$$

**Exemple :** Si $\vec{u} \begin{pmatrix} 3 \\ -2 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 4 \\ 5 \end{pmatrix}$ :

$$\vec{u} \cdot \vec{v} = 3 \times 4 + (-2) \times 5 = 12 - 10 = 2$$

---

## Formule avec les normes (identités remarquables)

Pour tous vecteurs $\vec{u}$ et $\vec{v}$ :

$$
\boxed{\vec{u} \cdot \vec{v} = \frac{1}{2}\left(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2\right)}
$$

Ou sous forme développée :

$$
\boxed{\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u} \cdot \vec{v} + \|\vec{v}\|^2}
$$

$$
\boxed{\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 - 2\vec{u} \cdot \vec{v} + \|\vec{v}\|^2}
$$

**Application aux triangles :** Dans un triangle $ABC$ :

$$
\boxed{AB^2 = AC^2 + BC^2 - 2 \times AC \times BC \times \cos(\widehat{ACB})}
$$

Cette formule s'appelle la **formule d'Al-Kashi** (ou loi des cosinus).

**Exemple :** Si $\|\vec{u}\| = 5$, $\|\vec{v}\| = 3$ et $\|\vec{u} + \vec{v}\| = 7$ :

$$7^2 = 5^2 + 2\vec{u} \cdot \vec{v} + 3^2$$
$$49 = 25 + 2\vec{u} \cdot \vec{v} + 9$$
$$2\vec{u} \cdot \vec{v} = 49 - 34 = 15$$
$$\vec{u} \cdot \vec{v} = 7{,}5$$

---

## Théorème d'Al-Kashi (loi des cosinus)

Dans un triangle $ABC$ quelconque :

$$
\boxed{BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})}
$$

**Remarque :** Le théorème de Pythagore est un cas particulier d'Al-Kashi quand $\widehat{BAC} = 90°$ (car $\cos 90° = 0$).

**Démonstration avec les vecteurs :**

$$BC^2 = \|\vec{BC}\|^2 = \|\vec{AC} - \vec{AB}\|^2 = \|\vec{AC}\|^2 - 2\vec{AB} \cdot \vec{AC} + \|\vec{AB}\|^2$$

Or $\vec{AB} \cdot \vec{AC} = AB \times AC \times \cos(\widehat{BAC})$, d'où le résultat.

**Exemple :** Dans le triangle $ABC$, $AB = 7$, $AC = 5$ et $\widehat{BAC} = 60°$.

$$BC^2 = 7^2 + 5^2 - 2 \times 7 \times 5 \times \cos(60°)$$
$$BC^2 = 49 + 25 - 70 \times \frac{1}{2} = 74 - 35 = 39$$
$$BC = \sqrt{39} \approx 6{,}2$$

---

## Propriétés du produit scalaire

Le produit scalaire est :

**Commutatif :** $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$

**Linéaire :** 
- $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$
- $(k\vec{u}) \cdot \vec{v} = k(\vec{u} \cdot \vec{v})$ pour tout réel $k$

---

## Orthogonalité

**Deux vecteurs $\vec{u}$ et $\vec{v}$ sont orthogonaux** si et seulement si :

$$
\boxed{\vec{u} \cdot \vec{v} = 0}
$$

**En coordonnées :** $\vec{u} \begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v} \begin{pmatrix} x' \\ y' \end{pmatrix}$ sont orthogonaux ssi :

$$
\boxed{xx' + yy' = 0}
$$

**Application :** Deux droites sont perpendiculaires si leurs vecteurs directeurs sont orthogonaux.

**Exemple :** $\vec{u} \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 6 \\ -4 \end{pmatrix}$ sont-ils orthogonaux ?

$$2 \times 6 + 3 \times (-4) = 12 - 12 = 0$$ ✓ Oui, ils sont orthogonaux.

---

## Calcul d'angle avec le produit scalaire

Pour calculer l'**angle** $\theta$ entre deux vecteurs non nuls $\vec{u}$ et $\vec{v}$ :

$$
\boxed{\cos \theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \times \|\vec{v}\|}}
$$

**Exemple :** Calculer l'angle entre $\vec{u} \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 3 \\ 0 \end{pmatrix}$.

$$\vec{u} \cdot \vec{v} = 1 \times 3 + 1 \times 0 = 3$$
$$\|\vec{u}\| = \sqrt{1^2 + 1^2} = \sqrt{2}$$
$$\|\vec{v}\| = \sqrt{3^2 + 0^2} = 3$$
$$\cos \theta = \frac{3}{\sqrt{2} \times 3} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$

Donc $\theta = 45°$.

---

## 📌 Formules à retenir

| Type de formule | Expression |
|-----------------|------------|
| **Définition (cosinus)** | $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$ |
| **Coordonnées** | $\vec{u} \cdot \vec{v} = xx' + yy'$ |
| **Carré scalaire** | $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$ |
| **Projeté orthogonal** | $\vec{AB} \cdot \vec{AC} = AB \times AH$ |
| **Identité remarquable** | $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$ |
| **Al-Kashi** | $BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cdot \cos(\widehat{BAC})$ |
| **Orthogonalité** | $\vec{u} \perp \vec{v} \Leftrightarrow \vec{u} \cdot \vec{v} = 0$ |
| **Calcul d'angle** | $\cos \theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \times \|\vec{v}\|}$ |

---

## Exercices

<details>
<summary>Exercice 1 : Calcul avec les coordonnées</summary>

Soit $\vec{u} \begin{pmatrix} 4 \\ -3 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 2 \\ 5 \end{pmatrix}$.

1. Calculer $\vec{u} \cdot \vec{v}$.
2. Les vecteurs sont-ils orthogonaux ?

</details>

<details>
<summary>Solution exercice 1</summary>

1. $\vec{u} \cdot \vec{v} = 4 \times 2 + (-3) \times 5 = 8 - 15 = -7$

2. Non, car $\vec{u} \cdot \vec{v} = -7 \neq 0$

</details>

<details>
<summary>Exercice 2 : Orthogonalité</summary>

Déterminer $k$ pour que les vecteurs $\vec{u} \begin{pmatrix} 3 \\ k \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 4 \\ 6 \end{pmatrix}$ soient orthogonaux.

</details>

<details>
<summary>Solution exercice 2</summary>

Pour que $\vec{u} \perp \vec{v}$, il faut $\vec{u} \cdot \vec{v} = 0$ :

$$3 \times 4 + k \times 6 = 0$$
$$12 + 6k = 0$$
$$6k = -12$$
$$\boxed{k = -2}$$

</details>

<details>
<summary>Exercice 3 : Calcul d'angle</summary>

Calculer l'angle entre $\vec{u} \begin{pmatrix} 2 \\ 0 \end{pmatrix}$ et $\vec{v} \begin{pmatrix} 1 \\ \sqrt{3} \end{pmatrix}$.

</details>

<details>
<summary>Solution exercice 3</summary>

$$\vec{u} \cdot \vec{v} = 2 \times 1 + 0 \times \sqrt{3} = 2$$

$$\|\vec{u}\| = \sqrt{2^2 + 0^2} = 2$$

$$\|\vec{v}\| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$$

$$\cos \theta = \frac{2}{2 \times 2} = \frac{1}{2}$$

Donc $\boxed{\theta = 60°}$

</details>

<details>
<summary>Exercice 4 : Identité remarquable</summary>

Soit $\vec{u}$ et $\vec{v}$ deux vecteurs tels que $\|\vec{u}\| = 4$, $\|\vec{v}\| = 3$ et $\vec{u} \cdot \vec{v} = 6$.

Calculer $\|\vec{u} + \vec{v}\|$ et $\|\vec{u} - \vec{v}\|$.

</details>

<details>
<summary>Solution exercice 4</summary>

**Pour $\|\vec{u} + \vec{v}\|$ :**

$$\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$$
$$= 4^2 + 2 \times 6 + 3^2 = 16 + 12 + 9 = 37$$
$$\boxed{\|\vec{u} + \vec{v}\| = \sqrt{37}}$$

**Pour $\|\vec{u} - \vec{v}\|$ :**

$$\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 - 2\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$$
$$= 16 - 12 + 9 = 13$$
$$\boxed{\|\vec{u} - \vec{v}\| = \sqrt{13}}$$

</details>

<details>
<summary>Exercice 5 : Théorème d'Al-Kashi</summary>

Dans le triangle $ABC$, on a $AB = 8$, $AC = 6$ et $\widehat{BAC} = 120°$.

Calculer $BC$.

</details>

<details>
<summary>Solution exercice 5</summary>

Par Al-Kashi :

$$BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos(\widehat{BAC})$$
$$BC^2 = 8^2 + 6^2 - 2 \times 8 \times 6 \times \cos(120°)$$
$$BC^2 = 64 + 36 - 96 \times \left(-\frac{1}{2}\right)$$
$$BC^2 = 100 + 48 = 148$$
$$\boxed{BC = \sqrt{148} = 2\sqrt{37} \approx 12{,}2}$$

</details>

<details>
<summary>Exercice 6 : Projeté orthogonal</summary>

Soit $ABC$ un triangle rectangle en $A$ avec $AB = 5$ et $AC = 12$.

Soit $H$ le projeté orthogonal de $A$ sur $(BC)$.

1. Calculer $BC$ (utiliser Pythagore).
2. Calculer $\vec{BA} \cdot \vec{BC}$ de deux façons différentes.
3. En déduire $BH$.

</details>

<details>
<summary>Solution exercice 6</summary>

1. Par Pythagore : $BC^2 = AB^2 + AC^2 = 25 + 144 = 169$
   
   Donc $BC = 13$

2. **Première façon** (avec l'angle) :
   
   $\vec{BA} \cdot \vec{BC} = BA \times BC \times \cos(\widehat{ABC})$
   
   Or dans un triangle rectangle, $\cos(\widehat{ABC}) = \frac{AB}{BC} = \frac{5}{13}$
   
   $\vec{BA} \cdot \vec{BC} = 5 \times 13 \times \frac{5}{13} = 25$
   
   **Deuxième façon** (avec le projeté) :
   
   $\vec{BA} \cdot \vec{BC} = BA \times BH = 5 \times BH$

3. En égalisant : $5 \times BH = 25$
   
   Donc $\boxed{BH = 5}$

</details>

<details>
<summary>Exercice 7 : Problème complet</summary>

Dans un repère orthonormé, soit $A(1; 2)$, $B(5; 4)$ et $C(3; 6)$.

1. Calculer les coordonnées de $\vec{AB}$ et $\vec{AC}$.
2. Calculer $\vec{AB} \cdot \vec{AC}$.
3. Calculer $AB$ et $AC$.
4. En déduire la mesure de l'angle $\widehat{BAC}$ (arrondir au degré).
5. Le triangle $ABC$ est-il rectangle ?

</details>

<details>
<summary>Solution exercice 7</summary>

1. $\vec{AB} \begin{pmatrix} 5 - 1 \\ 4 - 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$
   
   $\vec{AC} \begin{pmatrix} 3 - 1 \\ 6 - 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$

2. $\vec{AB} \cdot \vec{AC} = 4 \times 2 + 2 \times 4 = 8 + 8 = 16$

3. $AB = \sqrt{4^2 + 2^2} = \sqrt{20} = 2\sqrt{5}$
   
   $AC = \sqrt{2^2 + 4^2} = \sqrt{20} = 2\sqrt{5}$

4. $\cos(\widehat{BAC}) = \frac{\vec{AB} \cdot \vec{AC}}{AB \times AC} = \frac{16}{2\sqrt{5} \times 2\sqrt{5}} = \frac{16}{20} = \frac{4}{5} = 0{,}8$
   
   $\widehat{BAC} = \arccos(0{,}8) \approx \boxed{37°}$

5. Non, car $\vec{AB} \cdot \vec{AC} = 16 \neq 0$

</details>

---

## ⚠️ Pièges à éviter

❌ **Confondre produit scalaire et norme** : $\vec{u} \cdot \vec{v}$ est un **nombre**, pas un vecteur

❌ **Oublier le cosinus** dans la formule : $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos \theta$ et pas juste $\|\vec{u}\| \times \|\vec{v}\|$

❌ **Mauvais signe avec le projeté** : attention au sens du vecteur projeté

❌ **Confondre** $\vec{u} \cdot \vec{v} = 0$ (orthogonalité) et $xy' - yx' = 0$ (colinéarité)

❌ **Oublier la racine** : $\|\vec{u} + \vec{v}\|^2 = ...$ puis $\|\vec{u} + \vec{v}\| = \sqrt{...}$

❌ **Se tromper dans Al-Kashi** : c'est $-2 \times AB \times AC \times \cos$ (signe moins !)