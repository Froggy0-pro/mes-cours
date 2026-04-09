---
title: "4) L'électricité"
weight: 1
---

## Tension électrique

La **tension électrique** représente la différence de potentiel entre deux points d'un circuit. Elle traduit la "force" qui pousse les électrons à circuler. On la note **U** et elle se mesure en **Volt (V)**.

<u>**Pour mesurer une tension**, on utilise un **voltmètre** que l'on branche en **dérivation** (parallèle) aux bornes du dipôle.</u>

**Exemples de tensions courantes :**
- Pile standard : 1,5 V ou 9 V
- Prise domestique : 230 V
- Batterie de voiture : 12 V

### Loi d'additivité des tensions

Dans un circuit en série, **la tension totale est égale à la somme des tensions** aux bornes de chaque dipôle :

$$
\boxed{U_{\text{totale}} = U_1 + U_2 + U_3 + ...}
$$

**Exemple :** Si une pile de 9 V alimente deux lampes en série avec $U_1 = 5$ V et $U_2 = 4$ V, alors $U_{\text{pile}} = 5 + 4 = 9$ V ✓

Dans un circuit en dérivation, **la tension est la même** aux bornes de tous les dipôles branchés en parallèle :

$$
\boxed{U = U_1 = U_2 = U_3 = ...}
$$

## Intensité du courant électrique

L'**intensité du courant électrique** représente la quantité d'électrons qui circule dans un circuit par seconde. On la note **I** et elle se mesure en **Ampère (A)**.

<u>**Pour mesurer une intensité**, on utilise un **ampèremètre** que l'on branche en **série** dans le circuit.</u>

**Ordres de grandeur :**
- LED : quelques mA (milliampères)
- Lampe domestique : 0,2 à 1 A
- Bouilloire électrique : 10 A

### Loi d'unicité de l'intensité

Dans un circuit en série, **l'intensité est la même** en tout point du circuit :

$$
\boxed{I = I_1 = I_2 = I_3 = ...}
$$

**Exemple :** Si un ampèremètre mesure 0,3 A avant une lampe en série, il mesurera également 0,3 A après la lampe.

### Loi des nœuds

Dans un circuit en dérivation, **l'intensité qui arrive à un nœud est égale à la somme des intensités qui en repartent** :

$$
\boxed{I_{\text{principale}} = I_1 + I_2 + I_3 + ...}
$$

**Exemple :** Si la branche principale transporte 1,2 A et se divise en deux branches de 0,5 A et 0,7 A : $1,2 = 0,5 + 0,7$ ✓

## Résistance électrique

La **résistance électrique** représente l'opposition d'un dipôle au passage du courant. On la note **R** et elle se mesure en **Ohm (Ω)**.

<u>**Pour mesurer une résistance**, on utilise un **ohmmètre** branché aux bornes du dipôle **hors tension** (circuit éteint).</u>

### Loi d'Ohm

Pour un conducteur ohmique (résistance), **la tension à ses bornes est proportionnelle à l'intensité** qui le traverse :

$$
\boxed{U = R \times I}
$$

Où :
- $U$ est en Volt (V)
- $R$ est en Ohm (Ω)
- $I$ est en Ampère (A)

**Exemple :** Une résistance de $R = 100$ Ω traversée par un courant de $I = 0,2$ A a une tension à ses bornes de :
$U = 100 \times 0,2 = 20$ V

**Variantes utiles de la formule :**

$$
\boxed{R = \frac{U}{I}} \quad \text{et} \quad \boxed{I = \frac{U}{R}}
$$

## Puissance électrique

La **puissance électrique** représente l'énergie consommée ou fournie par seconde par un appareil. On la note **P** et elle se mesure en **Watt (W)**.

$$
\boxed{P = U \times I}
$$

Où :
- $P$ est en Watt (W)
- $U$ est en Volt (V)
- $I$ est en Ampère (A)

**Exemple :** Une lampe branchée sur 230 V et traversée par 0,26 A consomme :
$P = 230 \times 0,26 = 60$ W

**Pour un conducteur ohmique**, on peut aussi écrire (en utilisant la loi d'Ohm) :

$$
\boxed{P = R \times I^2} \quad \text{ou} \quad \boxed{P = \frac{U^2}{R}}
$$

## Énergie électrique

L'**énergie électrique** consommée par un appareil dépend de sa puissance et du temps d'utilisation :

$$
\boxed{E = P \times t}
$$

Où :
- $E$ est en Joule (J) si $t$ est en secondes (s)
- $E$ est en Watt-heure (Wh) si $t$ est en heures (h)
- $E$ est en kilowatt-heure (kWh) si $P$ est en kW et $t$ en heures

**Exemple :** Une lampe de 60 W allumée pendant 2 heures consomme :
$E = 60 \times 2 = 120$ Wh $= 0,12$ kWh

**Note importante :** Sur les factures d'électricité, l'énergie est facturée en **kWh** (et non en Joules).

---

## 📌 À retenir - Formules essentielles

| Grandeur | Formule | Unités |
|----------|---------|--------|
| **Loi d'Ohm** | $U = R \times I$ | V, Ω, A |
| **Puissance** | $P = U \times I$ | W, V, A |
| **Énergie** | $E = P \times t$ | J (ou Wh), W, s (ou h) |
| **Loi des nœuds** | $I_{\text{principale}} = I_1 + I_2 + ...$ | A |
| **Additivité tensions (série)** | $U_{\text{totale}} = U_1 + U_2 + ...$ | V |

---

## Exercices

<details>
<summary>Exercice 1 : Application de la loi d'Ohm</summary>

Une résistance de 220 Ω est branchée sur une pile de 9 V.

1. Quelle intensité traverse la résistance ?
2. Quelle puissance dissipe-t-elle ?

</details>

<details>
<summary>Solution exercice 1</summary>

1. En utilisant la loi d'Ohm : $I = \frac{U}{R} = \frac{9}{220} = 0,041$ A $= 41$ mA

2. $P = U \times I = 9 \times 0,041 = 0,37$ W

   Ou bien : $P = \frac{U^2}{R} = \frac{9^2}{220} = \frac{81}{220} = 0,37$ W

</details>

<details>
<summary>Exercice 2 : Circuit en série</summary>

Un circuit en série comprend une pile de 12 V et deux lampes. La première lampe a une tension de 7 V à ses bornes.

1. Quelle est la tension aux bornes de la deuxième lampe ?
2. Si l'intensité dans le circuit est de 0,5 A, quelle est la puissance de chaque lampe ?

</details>

<details>
<summary>Solution exercice 2</summary>

1. Loi d'additivité des tensions : $U_{\text{pile}} = U_1 + U_2$
   
   $12 = 7 + U_2$ donc $U_2 = 12 - 7 = 5$ V

2. Puissance de la lampe 1 : $P_1 = U_1 \times I = 7 \times 0,5 = 3,5$ W
   
   Puissance de la lampe 2 : $P_2 = U_2 \times I = 5 \times 0,5 = 2,5$ W

</details>

<details>
<summary>Exercice 3 : Circuit en dérivation</summary>

Un générateur de 12 V alimente deux lampes en dérivation. La première lampe est traversée par 0,3 A et la deuxième par 0,5 A.

1. Quelle est la tension aux bornes de chaque lampe ?
2. Quelle intensité délivre le générateur ?
3. Quelle est la puissance totale consommée ?

</details>

<details>
<summary>Solution exercice 3</summary>

1. En dérivation, la tension est la même partout : $U_1 = U_2 = 12$ V

2. Loi des nœuds : $I_{\text{principale}} = I_1 + I_2 = 0,3 + 0,5 = 0,8$ A

3. Puissance totale : $P_{\text{totale}} = U \times I_{\text{principale}} = 12 \times 0,8 = 9,6$ W
   
   Ou bien : $P_1 = 12 \times 0,3 = 3,6$ W et $P_2 = 12 \times 0,5 = 6$ W
   
   $P_{\text{totale}} = 3,6 + 6 = 9,6$ W ✓

</details>

<details>
<summary>Exercice 4 : Consommation énergétique</summary>

Une télévision de 150 W reste allumée 4 heures par jour.

1. Quelle énergie consomme-t-elle en une journée (en kWh) ?
2. Combien coûte son utilisation sur un mois (30 jours) si le kWh coûte 0,20 € ?

</details>

<details>
<summary>Solution exercice 4</summary>

1. $E = P \times t = 150 \times 4 = 600$ Wh $= 0,6$ kWh par jour

2. Énergie mensuelle : $0,6 \times 30 = 18$ kWh
   
   Coût : $18 \times 0,20 = 3,60$ €

</details>

<details>
<summary>Exercice 5 : Problème complet</summary>

Un radiateur électrique porte les indications suivantes : 230 V - 2000 W.

1. Quelle intensité traverse-t-il quand il fonctionne normalement ?
2. Quelle est sa résistance ?
3. S'il fonctionne 6 heures par jour, quelle énergie consomme-t-il en un mois (en kWh) ?
4. Quel est le coût mensuel si le kWh coûte 0,18 € ?

</details>

<details>
<summary>Solution exercice 5</summary>

1. $I = \frac{P}{U} = \frac{2000}{230} = 8,7$ A

2. $R = \frac{U}{I} = \frac{230}{8,7} = 26,4$ Ω
   
   Ou bien : $R = \frac{U^2}{P} = \frac{230^2}{2000} = \frac{52900}{2000} = 26,45$ Ω

3. Énergie journalière : $E = 2000 \times 6 = 12000$ Wh $= 12$ kWh
   
   Énergie mensuelle : $12 \times 30 = 360$ kWh

4. Coût : $360 \times 0,18 = 64,80$ €

</details>

---

## ⚠️ Pièges à éviter

❌ **Confondre série et dérivation** pour le branchement des appareils de mesure :
- Voltmètre → toujours en **dérivation** (parallèle)
- Ampèremètre → toujours en **série**

❌ **Oublier de convertir les unités** :
- mA → A (diviser par 1000)
- kW → W (multiplier par 1000)
- h → s (multiplier par 3600)

❌ **Confondre puissance et énergie** :
- Puissance = énergie consommée **par seconde**
- Énergie = puissance × temps

❌ **Mesurer une résistance avec le circuit sous tension** → risque de détruire l'ohmmètre !