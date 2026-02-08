---
title: "3) Constante d'acidité Ka"
---

## Produit ionique de l'eau

L'eau est une espèce amphotère appartenant aux couples $\ce{H3O+/H2O}$ et $\ce{H2O/HO-}$. La réaction acido-basique entre ces deux couples, appelée **autoprotolyse de l'eau**, donne l'équation $\ce{2H2O <=> H3O+ + HO-}$

La constante d'équilibre de cette réaction est appelée **produit ionique de l'eau**, noté $K_e$. Étant donné que l'eau n'intervient pas dans la formule du quotient de réaction/constante d'équilibre, seuls les produits sont pris en compte. De plus, on sait que le pH de l'eau à 25°C vaut environ 7, ce qui implique que ${[\ce{H3O+}] = 10^{-\text{pH}} = 10^{-7}}$. Or l'eau se dissocie en autant d'ions ${\ce{H3O+}}$ que ${\ce{HO-}}$ donc ${[\ce{HO-}] = [\ce{H3O+}] = 10^{-7}}$.

À 25 °C, le produit ionique de l’eau vaut donc $\boxed{K_e = [\mathrm{H_3O^+}] \times [\mathrm{HO^-}] = 10^{-14}}$

On peut aussi définir le $pKe$ tel que $pK_e = -\log(K_e) = 14$


## Constante d'acidité

La réaction acido-basique entre entre un acide quelconque $AH$ et l'eau est $\ce{AH + H2O <=> A- + H3O+}$

La constante d'équilibre d'une telle réaction est appelée **constante d'acidité**. Elle se note $K_a$ et a donc pour expression $\boxed{K_a = \frac{[\ce{H3O+}] \ [\ce{A-}]}{[\ce{AH}]}}$

On définit le $pK_a$ exactement de la même manière que le $pH$ ou le $pK_e$, on a donc aussi $\boxed{\text{p}K_a = -\log(K_a)}$ et $\boxed{K_a = 10^{-\text{p}K_a}}$

<u>**Relation entre pH et pKa**</u>: 

$\text{p}K_a = -\log(K_a) = -\log\left(\frac{[\ce{H3O+}] \ [\ce{A-}]}{[\ce{AH}]}\right)= -\log[\ce{H3O+}] - \log\left(\frac{[\ce{A-}]}{[\ce{AH}]}\right)=\text{pH} - \log\left(\frac{[\ce{A-}]}{[\ce{AH}]}\right)$

Soit au final $\boxed{\text{pH} = \text{p}K_a + \log\left(\frac{[\ce{A-}]}{[\ce{AH}]}\right)}$

<u>Cas particulier</u>: À la demi-équivalence, $[\ce{A-}] = [\ce{AH}]$, donc $\text{pH} = \text{p}K_a$



<details>
<summary>Exercice</summary>

Équilibrer l'équation suivante :

$$\ce{Fe + O2 -> Fe2O3}$$

**Solution :**

$$\ce{4Fe + 3O2 -> 2Fe2O3}$$

</details>

<details>
<summary>Solution</summary>

Calculer la masse molaire du sulfate de cuivre $\ce{CuSO4}$.

**Données :**
- M(Cu) = 63,5 g/mol
- M(S) = 32 g/mol
- M(O) = 16 g/mol

**Solution :**

M($\ce{CuSO4}$) = 63,5 + 32 + 4×16 = 159,5 g/mol

</details>



## Diagramme de prédominance

Pour un couple acide/base $\ce{AH}/\ce{A-}$, le **diagramme de prédominance** permet de visualiser quelle espèce prédomine en fonction du $pH$.

<figure>
<div class="center">

<pre>
pH  0    1    2    3    4    5    6    7    8    9    10   11   12   13   14
    ├────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┤
    
    │◄──────── AH prédomine ────────► │ ◄──────── A⁻ prédomine ────────►│
    │         (forme acide)           │          (forme basique)        │
    │                                 │                                 │
    pKa
    │
    [AH] = [A⁻]
</pre>
</div>

</figure>

Ainsi, si on connait le $pK_a$ du couple acide/base étudié et qu'on mesure le $pH$ de la solution, on peut déduire l'espèce majoritaire en solution:

- si $pH<pK_a$, alors l'espèce acide prédomine,
- si $pH>pK_a$, alors l'espèce basique prédomine,
- si $pH=pK_a$, alors les deux espèces sont en proportions égales.

## Diagramme de distribution

En plus d'également fournir l'information sur l'espèce prédominante en solution, le **diagramme de distribution** permet de représenter la proportion de chacune des espèces en fonction du $pH$.

<div class="center">
<img src="/images/chimie/diagramme-distribution.png" alt="Diagramme de distribution" width="400">
</div>

- Lorsque le $pH$ est très faible, l'espèce acide représente 100% du contenu de la solution et l'espèce basique 0%.
- Lorsque le $pH$ est très élevé, l'espèce basique représente 100% du contenu de la solution et l'espèce acide 0%.
- Lorsque les deux courbes se croisent, les espèces acide et basique sont en proportions égales, on retrouve donc graphiquement le $pK_a$.

Il est tout à fait possible pour un acide d'avoir plusieurs ions $\ce{H+}$ à céder (on parle de diacide pour 2, triacide pour 3, etc.), dans ce cas il y aura plusieurs couples acide/base successifs et donc plusieurs $pK_a$, qui peuvent être représentés dans le même diagramme, qu'il s'agisse du diagramme de prédominance ou de distribution!


<details>
<summary>Exercice</summary>

Équilibrer l'équation suivante :

$$\ce{Fe + O2 -> Fe2O3}$$

**Solution :**

$$\ce{4Fe + 3O2 -> 2Fe2O3}$$

</details>

<details>
<summary>Solution</summary>

Calculer la masse molaire du sulfate de cuivre $\ce{CuSO4}$.

**Données :**
- M(Cu) = 63,5 g/mol
- M(S) = 32 g/mol
- M(O) = 16 g/mol

**Solution :**

M($\ce{CuSO4}$) = 63,5 + 32 + 4×16 = 159,5 g/mol

</details>