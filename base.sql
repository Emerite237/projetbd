-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 10 mai 2023 à 13:43
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bd`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_cat` int(10) UNSIGNED NOT NULL,
  `lib_cat` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_cat`, `lib_cat`) VALUES
(1, 'Découverte'),
(2, 'Hebergement');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id_com` int(10) UNSIGNED NOT NULL,
  `commentaire` text NOT NULL,
  `date_com` datetime NOT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_utilisateur` int(10) UNSIGNED NOT NULL,
  `id_parent` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id_com`, `commentaire`, `date_com`, `id_post`, `id_utilisateur`, `id_parent`) VALUES
(1, 'j\'ai deja visité la semaine dernière. merci de m\'avoir guidé.', '2023-04-22 11:17:50', 1, 1, 0),
(2, 'J\'ai apprecié mais le climat y est rude en  cette saison', '2023-04-22 13:14:03', 3, 4, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id_img` int(10) UNSIGNED NOT NULL,
  `lib_img` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `date_img` datetime NOT NULL,
  `id_posts` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id_img`, `lib_img`, `image`, `date_img`, `id_posts`) VALUES
(1, 'Elephants se baladant dans une savane ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Elephants_around_tree_in_Waza%2C_Cameroon.', '2023-04-22 11:55:24', 2),
(2, 'chute d\'eau en cascade', 'https://cdn.generationvoyage.fr/2021/08/chutes-dekom.jpg.webp', '2023-04-22 11:58:50', 1),
(3, 'situé à ngaoundéré', 'https://cdn.generationvoyage.fr/2021/08/visiter-cameroun-10-1.jpg.webp', '2023-04-22 12:33:24', 4),
(4, 'c\'est un monument presentant un monsieur portant des enfants', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Monument_de_la_R%C3%A9unification.JPG/390p', '2023-04-22 12:33:24', 3);

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id_posts` int(11) UNSIGNED NOT NULL,
  `titre` varchar(100) NOT NULL,
  `contenu` text NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `id_type` int(10) UNSIGNED NOT NULL,
  `id_ville` int(10) UNSIGNED NOT NULL,
  `id_utilisateur` int(10) UNSIGNED NOT NULL,
  `date_post` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id_posts`, `titre`, `contenu`, `latitude`, `longitude`, `adresse`, `actif`, `id_type`, `id_ville`, `id_utilisateur`, `date_post`) VALUES
(1, 'monument de la  reunification', 'Le monument est érigé entre 1973 et 19761, le monument est à Yaoundé pour immortaliser l\'avènement de la Réunification de la République du Cameroun, ancien Cameroun français et le Cameroun méridional, partie de l\'ancien Cameroun britannique en 19612.\r\n\r\nL’ancien président de la République unie de Cameroun, Ahmadou Ahidjo lance un concours national et international pour faire une représentation de la réunification.\r\n\r\n3 personnes sont retenues :\r\n\r\nMgr Engelbert Mveng, Camerounais et concepteur de la tour en spirale et de la représentation des ères culturelles du nouvel État.\r\nArmand Salomon, architecte français et réalisateur du monument principal. Peu connu des Camerounais, il est choisi sur recommandation des Français\r\nGédéon Mpando, artiste camerounais concepteur et réalisateur du monument secondaire. De retour de France, ils se voit confier la réalisation du monument attenant. L\'atelier Arts nègres et de la société Cetouba l\'accompagnent. Etolo Eya contribue par des objets d\'arts visibles au sous-sol du bâtiment principal.', 0, 0, 'yaoundé, près de la poste centrale', 1, 3, 7, 4, '2023-04-22 11:34:41'),
(2, 'parc de waza', 'Le parc national de Waza est l\'un des parcs nationaux du Cameroun. Situé dans l\'extrême nord du pays, non loin du lac Tchad, près de Waza, il couvre une superficie de 1 700 km21. C\'est une réserve de biosphère reconnue par l\'Unesco depuis 19792. Riche d\'une faune naturelle exceptionnelle, il est l\'un des atouts touristiques du Cameroun.\r\n\r\nD\'abord réserve de chasse créée en 1934 sous le nom de Zina-Waza, le parc a reçu le statut de parc national en 19683.', 11.3333, 14.6667, 'quartier zina', 1, 3, 8, 5, '2023-04-22 11:42:22'),
(3, 'Parc national Korup', 'Le parc national de Korup est l’un des parcs les plus accessibles à visiter au Cameroun. Terrain de prédilection des scientifiques résidents, il est hachuré par de jolis sentiers menant à la rencontre d’oiseaux rares.\r\n\r\nParmi eux, des calaos et des oiseaux de roche à tête rouge (vous ne le savez peut-être pas, mais les ornithologues accomplis tueraient peut-être pour en voir !). Cela ne vous étonnera pas si on vous dit que le parc abrite également des éléphants et des chimpanzés.', 5028, 9.05, 'localité de Korup', 1, 4, 3, 5, '2023-04-22 12:14:03'),
(4, 'Parc national de la Benoué', 'Envie de visiter le Cameroun de l’Extrême-Nord ? Alors faites une halte dans la ville authentique de Ngaoundéré. Ici, vous découvrez le Cameroun très profond. Le palais de Lamido trône superbement au cœur de la ville tandis que les alentours rivalisent tous de beautés inouïes. Chutes d’eau, lacs où se camouflent quelques hippopotames et sentiers de randonnées : la nature est partout vierge et intacte.\r\n\r\nÀ soixante kilomètres au nord de Ngaoundéré, ne manquez pas le parc national de la Bénoué. C’est l’un des plus anciens du pays. Une nouvelle chance de contempler, en toute liberté et à mille lieux des safaris organisés, singes, phacochères, centaines d’oiseaux et hippopotames.', 8.368522, 0, 'quartier', 1, 3, 8, 6, '2023-04-22 12:38:52'),
(5, 'maison', 'tres  belle endroits ', 3, 3, 'ngousso', 1, 2, 1, 1, '2023-04-30 13:59:27'),
(6, 'maison', 'tres  belle endroits ', 3, 3, 'ngousso', 1, 2, 1, 1, '2023-04-30 13:59:30'),
(7, 'citadelle', 'tres  belle endroits ', 3, 3, 'ngousso', 1, 2, 1, 1, '2023-05-01 14:26:28'),
(8, 'monastere', 'tres  belle endroits ', 3, 3, 'ngousso', 1, 2, 5, 1, '2023-05-01 14:28:07'),
(10, 'monastere', 'tres  belle endroits ', 3, 3, 'ngousso', 1, 2, 5, 1, '2023-05-06 08:56:38');

-- --------------------------------------------------------

--
-- Structure de la table `regions`
--

CREATE TABLE `regions` (
  `id_region` int(10) UNSIGNED NOT NULL,
  `lib_region` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `regions`
--

INSERT INTO `regions` (`id_region`, `lib_region`) VALUES
(1, 'Région de l\'Adamaoua'),
(2, 'Region du  Centre'),
(9, 'Région du Sud'),
(8, 'Région de l\'Ouest'),
(5, 'Region du Littoral'),
(7, 'Région du Nord-Ouest'),
(10, 'Région du Sud-Ouest'),
(3, 'Région de l\'Est'),
(4, 'Région de l\'Extreme-Nord'),
(6, 'Region du Nord');

-- --------------------------------------------------------

--
-- Structure de la table `types`
--

CREATE TABLE `types` (
  `id_type` int(10) UNSIGNED NOT NULL,
  `lib_type` varchar(100) NOT NULL,
  `id_cat` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `types`
--

INSERT INTO `types` (`id_type`, `lib_type`, `id_cat`) VALUES
(1, 'Eco-Tourisme', 1),
(2, 'Tourisme de luxe', 2),
(3, 'Religieux', 1),
(4, 'tourisme culturel', 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_utilisateur` int(10) UNSIGNED NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `token` varchar(50) NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_utilisateur`, `nom`, `prenom`, `email`, `pass`, `token`, `date_creation`) VALUES
(1, 'SIMO', 'Bernadette judith', 'JudyB@gmail.com', 'judYbchou58', '1245ypi', '2023-04-22 11:27:41'),
(2, 'EBESSA', 'Alex', 'alexyE@gmail.com', 'EAXjj489', '7', '2023-04-22 11:29:18'),
(5, 'TAMO ', 'Jean Paul', 'TamooJP@gmail.com', 'Tamod465s', 'f48fs', '2023-04-22 11:30:27'),
(3, 'Nzokou', 'Franck Emerites', 'Nzofotso92@gmail.com', 'eru_Plane', 'SUshiJ84', '2023-04-22 13:21:28'),
(6, 'franck', 'franck', 'franck@gmail.com', '$2b$10$OsSfcXxRYsDz6aUiNAZwDu3IzsHlODTgTL2eqrgYFAyvSei7czFoe', '', '2023-05-08 07:17:26');

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

CREATE TABLE `villes` (
  `id_ville` int(10) UNSIGNED NOT NULL,
  `lib_ville` varchar(100) NOT NULL,
  `lat_ville` double NOT NULL,
  `long_ville` double NOT NULL,
  `id_region` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `villes`
--

INSERT INTO `villes` (`id_ville`, `lib_ville`, `lat_ville`, `long_ville`, `id_region`) VALUES
(1, 'Melong-littoral', 4.07, 9.7, 5),
(7, 'yaoundé, la ville aux 7 collines', 11.516667, 3.866667, 2),
(5, 'Kribi', 2.93, 9.91, 9),
(9, 'Ngaoundéré', 7.338149, 13.56683, 8);

-- --------------------------------------------------------

--
-- Structure de la table `votes`
--

CREATE TABLE `votes` (
  `id_vote` int(10) UNSIGNED NOT NULL,
  `vote` tinyint(1) NOT NULL,
  `date_vote` datetime NOT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_utilisateur` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `votes`
--

INSERT INTO `votes` (`id_vote`, `vote`, `date_vote`, `id_post`, `id_utilisateur`) VALUES
(1, 1, '2023-04-22 11:24:21', 1, 1),
(2, 1, '2023-04-22 00:00:00', 4, 1),
(3, 1, '2023-04-22 00:00:00', 4, 1),
(4, 0, '2023-04-22 13:23:39', 2, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_cat`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id_com`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id_img`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_posts`);

--
-- Index pour la table `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id_region`);

--
-- Index pour la table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id_type`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_utilisateur`);

--
-- Index pour la table `villes`
--
ALTER TABLE `villes`
  ADD PRIMARY KEY (`id_ville`);

--
-- Index pour la table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id_vote`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_cat` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id_com` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id_img` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id_posts` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `regions`
--
ALTER TABLE `regions`
  MODIFY `id_region` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `types`
--
ALTER TABLE `types`
  MODIFY `id_type` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_utilisateur` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `villes`
--
ALTER TABLE `villes`
  MODIFY `id_ville` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `votes`
--
ALTER TABLE `votes`
  MODIFY `id_vote` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
