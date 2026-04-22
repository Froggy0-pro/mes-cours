---
title: "3) Trigonométrie"
weight: 1
---
## Théorème de Thalès

Dans un **triangle $ABC$ quelconque**, si une droite $(MN)$ est parallèle à un côté du triangle (ici $BC$) et que les points $A, M, B$ et $A, N, C$ sont alignés, alors on obtient les relations de **proportionnalité** suivantes: $\boxed{\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}}$

<div class="center">
<img src="/images/maths/thales.png" alt="Thalès" width="500">
</div>

C'est le **théorème de Thalès**. Il permet de **calculer une longueur** grâce à trois autres longueurs dans une configuration en triangle avec <u>deux droites parallèles et des points alignés</u>.

Pour trouver une longueur dans une figure avec Thalès, on écrit les rapports de proportionnalité, puis on garde le couple de fractions comportant la longueur souhaitée et pour lequel on connaît les trois autres valeurs. On trouve ensuite la longueur grâce au <u>produit en croix</u>.

<div class="left">
<img src="/images/maths/produit_croix.png" alt="Thalès" width="200">
</div>

<u>Exemple d'énoncé</u>: Soit $IFH$ un triangle. On sait que les droites $(EG)$ et $(IH)$ sont parallèles. Trouver la longueur $FH$.

<div class="center">
<img src="/images/maths/exo_thales.png" alt="Thalès" width="200">
</div>

<u>Rédaction</u>: La droite $(EG)$ est parallèle à $(IH)$ et les points $F, E, I$ et $F, G, H$ sont alignés, d'après le théorème de Thalès : 

$\frac{FE}{FI} = \frac{FG}{FH} = \frac{GE}{HI}$. Donc $\frac{3}{FH} = \frac{5}{8,5}$, soit $FH = \frac{3*8,5}{5} = 5,1cm$

## Réciproque et contraposée du théorème

Dans le sens classique de Thalès, on utilise le fait que des droites sont parallèles pour justifier que l'on a le droit d'utiliser la formule. Cependant, on peut faire le chemin inverse, c'est-à-dire montrer que l'égalité vue précédemment est vérifiée dans un triangle pour démontrer que des droites sont parallèles. Dans ce sens, c'est la **réciproque** du théorème. D'ailleurs, il suffit de montrer que la relation de proportionnalité est vraie entre deux des trois fractions pour qu'elle soit vraie pour les trois.

<u>Exemple d'énoncé</u>: Les droites $(PQ)$ et $(XE)$ sont-elles parallèles?

<div class="center">
<img src="/images/maths/exo_thales2.png" alt="Thalès" width="450">
</div>

<u>Rédaction</u>: D'une part, $\frac{HE}{HP} = \frac{33}{41,25} = 0,8$. D'autre part, $\frac{HX}{HQ} = \frac{25}{31,25} = 0,8$. Les points $X, H, Q$ et $E, H, P$ sont alignés et $\frac{HX}{HQ} = \frac{HE}{HP}$, d'après la réciproque du théorème de Thalès, les droites $(PQ)$ et $(XE)$ sont parallèles.

Si on avait trouvé que $\frac{HX}{HQ} \neq \frac{HE}{HP}$, on aurait alors conclu que les droites n'étaient pas parallèles grâce à la **contraposée** du théorème de Thalès.

<details>
<summary>Exercice</summary>

1. Calculer $AE$ avec : $AB = 12$, $AD = 3$, $AC = 8$  
2. Vérifier si $(DE)$ est parallèle à $(BC)$ avec :  
   $AD = 2$, $AB = 6$, $AE = 3$, $AC = 9$  
3. Pourquoi est-il important de vérifier que les droites sont parallèles ?

</details>

<details>
<summary>Solution</summary>

1. $\frac{3}{12} = \frac{AE}{8} \Rightarrow AE = 2$  
2. $\frac{2}{6} = \frac{3}{9}$ → égalité → droites parallèles  
3. Sinon le théorème ne s’applique pas  

</details>