---
title: "3) Lois de Descartes"
weight: 1
---
## Réflexion et réfraction de la lumière

Soit un rayon lumineux se propageant en ligne droite dans un milieu 1 homogène. Lorsque ce rayon, appelé **rayon incident**, va entrer en contact avec un milieu 2 différent du premier, deux phénomènes vont avoir lieu:
- une partie du rayon est renvoyée dans le milieu 1, c'est le phénomène de **réflexion**,
- une partie du rayon passe dans le milieu 2 en étant dévié, c'est le phénomène de **réfraction**.

<div class="center">
<img src="/images/chimie/dioptre.png" alt="Dioptre" width="350">
</div>

La surface de séparation entre les deux milieux s'appelle le **dioptre**. On pensera bien à toujours représenter la **normale** au dioptre (une droite perpendiculaire au niveau du point d'incidence). En effet, <u>tous les angles sont à prendre par rapport à la normale</u>, pas par rapport au dioptre. Également, <u>on représentera systématiquement la direction de propagation des différents rayons par des flèches.</u>

Un milieu est caractérisé par son **indice de réfraction** $n$ (sans unité), qui correspond au rapport entre la célérité de la lumière dans le vide et sa vitesse dans ce milieu : $\boxed{n = \frac{c_{vide}}{v_{milieu}}}$

On peut donc facilement trouver la vitesse de la lumière dans un milieu si on connaît son indice de réfraction : $\boxed{v_{milieu}=\frac{c_{vide}}{n}}$

Voici quelques indices de réfraction classiques à titre indicatif:

<div style="margin: 1.5rem 2rem;">

| Milieu | Indice |
|:------:|:------:|
| Air | 1,0 |
| Eau | 1,33 |
| Verre | 1,5 |

</div>

## Lois de Snell-Descartes

- loi sur la réflexion: le rayon réfléchi repart dans le milieu 1 avec le même angle que l'angle d'incidence : $\boxed{i=r_1}$
- loi sur la réfraction: le rayon réfracté passe dans le milieu 2 avec un angle modifié par rapport à l'angle d'incidence : $\boxed{n_1*sin(i) = n_2 * sin(r_2)}$

Dans la plupart des exercices, on connaît 3 données parmi 4 dans la formule précédente, il suffit donc de la tourner dans le sens qui nous intéresse. Par exemple, $\boxed{n_1 = \frac{n_2 * sin(r_2)}{sin(i)}}$ ou encore $\boxed{i = arcsin(\frac{n_2 * sin(r_2)}{n_1})}$

<u>Remarque</u>: si $n_2 > n_1$, le rayon se rapproche de la normale tandis que si $n_2 < n_1$, il s'en éloigne. D'ailleurs, si l'angle de réfraction dépasse $90°$, il n'y aura pas de réfraction puisque le rayon ressort du milieu 2! C'est le phénomène de **réflexion totale**.

On peut nous demander de trouver l'angle d'incidence limite au-dessus duquel le rayon est entièrement réfléchi. Dans ce cas on a : $\boxed{i_{limite} = arcsin(\frac{n_2}{n_1})}$ car $sin(r2)=sin(90)=1$.

<details>
<summary>Exercice</summary>

1. Énoncer la loi de la réflexion.  
2. Que se passe-t-il si la lumière passe de l’air à l’eau ?  
3. Quel est le milieu le plus réfringent entre l’air et le verre ?  
4. Donner la relation de la réfraction.

</details>

<details>
<summary>Solution</summary>

1. $i = r$  
2. Le rayon se rapproche de la normale  
3. Le verre  
4. $n_1 \sin(i) = n_2 \sin(r)$  

</details>