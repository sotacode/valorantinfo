export interface WeaponsPriorityProps {
    tag: string;
    uuid: string;
    priority: number;
}

export const weaponsINFO = {
    weaponsPriority: [
        { tag: "odin", uuid: '63e6c2b6-4a8e-869c-3d4c-e38355226584', priority: 2 },
        { tag: "ares", uuid: '55d8a0f4-4274-ca67-fe2c-06ab45efdf58', priority: 1 },
        { tag: "vandal", uuid: '9c82e19d-4575-0200-1a81-3eacf00cf872', priority: 4 },
        { tag: "bulldog", uuid: 'ae3de142-4d85-2547-dd26-4e90bed35cf7', priority: 1 },
        { tag: "phantom", uuid: 'ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a', priority: 3 },
        { tag: "judge", uuid: 'ec845bf4-4f79-ddda-a3da-0db3774b2794', priority: 2 },
        { tag: "bucky", uuid: '910be174-449b-c412-ab22-d0873436b21b', priority: 1 },
        { tag: "frenzi", uuid: '44d4e95c-4157-0037-81b2-17841bf2e8e3', priority: 3 },
        { tag: "classic", uuid: '29a0cfab-485b-f5d5-779a-b59f85e204a8', priority: 1 },
        { tag: "ghost", uuid: '1baa85b4-4c70-1284-64bb-6481dfc3bb4e', priority: 4 },
        { tag: "sheriff", uuid: 'e336c6b8-418d-9340-d77f-7a9e4cfe0702', priority: 5 },
        { tag: "shorty", uuid: '42da8ccc-40d5-affc-beec-15aa47b42eda', priority: 2 },
        { tag: "operator", uuid: 'a03b24d3-4319-996d-0f8c-94bbfba1dfc7', priority: 2 },
        { tag: "guardian", uuid: '4ade7faa-4cf1-8376-95ef-39884480959b', priority: 2 },
        { tag: "marshal", uuid: 'c4883e50-4494-202c-3ec3-6b8a9284f00b', priority: 1 },
        { tag: "spectre", uuid: '462080d1-4035-2937-7c09-27aa2a5c27a7', priority: 2 },
        { tag: "stinger", uuid: 'f7e1b454-4ad4-1063-ec0a-159e56b58941', priority: 1 },
        { tag: "melee", uuid: '2f59173c-4bed-b6c3-2191-dea9b58be9c7', priority: 1 },
    ],

    detailWeaponsTexts: {
        esES: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nombre",
                description: null,
            },
            category: {
                title: "Categoría",
                description: null,
            },
            cost: {
                title: "Costo",
                description: null
            },
            weaponStats: {
                title: "Estadísticas",
                description: null
            },
            fireRate: {
                title: "Velocidad de Disparo",
                description: null
            },
            magazineSize: {
                title: "Tamaño del Cargador",
                description: null,
            },
            equipTimeSeconds: {
                title: "Tiempo de Equipar Arma",
                description: null
            },
            reloadTimeSeconds: {
                title: "Tiempo de Recarga de Arma",
                description: null
            },
            firstBulletAccuracy: {
                title: "Precisión de la Primera Bala",
                description: null
            },
            wallPenetration: {
                title: "Penetración de la Bala",
                description: null
            }
        },
        enUS: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Name",
                description: null,
            },
            category: {
                title: "Category",
                description: null,
            },
            cost: {
                title: "Cost",
                description: null
            },
            weaponStats: {
                title: "Statistics",
                description: null
            },
            fireRate: {
                title: "Fire Rate",
                description: null
            },
            magazineSize: {
                title: "Magazine Size",
                description: null,
            },
            equipTimeSeconds: {
                title: "Equip Time",
                description: null
            },
            reloadTimeSeconds: {
                title: "Reload Time",
                description: null
            },
            firstBulletAccuracy: {
                title: "First Bullet Accuracy",
                description: null
            },
            wallPenetration: {
                title: "Bullet Penetration",
                description: null
            }
        },
        arAE: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "الاسم",
                description: null,
            },
            category: {
                title: "الفئة",
                description: null,
            },
            cost: {
                title: "التكلفة",
                description: null
            },
            weaponStats: {
                title: "الإحصائيات",
                description: null
            },
            fireRate: {
                title: "سرعة الإطلاق",
                description: null
            },
            magazineSize: {
                title: "حجم المخزن",
                description: null,
            },
            equipTimeSeconds: {
                title: "وقت التجهيز",
                description: null
            },
            reloadTimeSeconds: {
                title: "وقت إعادة التحميل",
                description: null
            },
            firstBulletAccuracy: {
                title: "دقة الرصاصة الأولى",
                description: null
            },
            wallPenetration: {
                title: "قوة اختراق الرصاص",
                description: null
            }
        },
        deDE: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Name",
                description: null,
            },
            category: {
                title: "Kategorie",
                description: null,
            },
            cost: {
                title: "Kosten",
                description: null
            },
            weaponStats: {
                title: "Statistiken",
                description: null
            },
            fireRate: {
                title: "Feuerrate",
                description: null
            },
            magazineSize: {
                title: "Magazingröße",
                description: null,
            },
            equipTimeSeconds: {
                title: "Waffenbereitschaftszeit",
                description: null
            },
            reloadTimeSeconds: {
                title: "Nachladezeit",
                description: null
            },
            firstBulletAccuracy: {
                title: "Erste-Schuss-Genauigkeit",
                description: null
            },
            wallPenetration: {
                title: "Durchschlagskraft",
                description: null
            }
        },
        esMX: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nombre",
                description: null,
            },
            category: {
                title: "Categoría",
                description: null,
            },
            cost: {
                title: "Costo",
                description: null
            },
            weaponStats: {
                title: "Estadísticas",
                description: null
            },
            fireRate: {
                title: "Velocidad de Disparo",
                description: null
            },
            magazineSize: {
                title: "Tamaño del Cargador",
                description: null,
            },
            equipTimeSeconds: {
                title: "Tiempo de Equipar Arma",
                description: null
            },
            reloadTimeSeconds: {
                title: "Tiempo de Recarga de Arma",
                description: null
            },
            firstBulletAccuracy: {
                title: "Precisión de la Primera Bala",
                description: null
            },
            wallPenetration: {
                title: "Penetración de la Bala",
                description: null
            }
        },
        frFR: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nom",
                description: null,
            },
            category: {
                title: "Catégorie",
                description: null,
            },
            cost: {
                title: "Coût",
                description: null
            },
            weaponStats: {
                title: "Statistiques",
                description: null
            },
            fireRate: {
                title: "Cadence de Tir",
                description: null
            },
            magazineSize: {
                title: "Taille du Chargeur",
                description: null,
            },
            equipTimeSeconds: {
                title: "Temps d'Équipement",
                description: null
            },
            reloadTimeSeconds: {
                title: "Temps de Rechargement de l'Arme",
                description: null
            },
            firstBulletAccuracy: {
                title: "Précision de la Première Balle",
                description: null
            },
            wallPenetration: {
                title: "Pénétration des Balles",
                description: null
            }
        },
        idID: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nama",
                description: null,
            },
            category: {
                title: "Kategori",
                description: null,
            },
            cost: {
                title: "Biaya",
                description: null
            },
            weaponStats: {
                title: "Statistik",
                description: null
            },
            fireRate: {
                title: "Laju Tembak",
                description: null
            },
            magazineSize: {
                title: "Ukuran Magazen",
                description: null,
            },
            equipTimeSeconds: {
                title: "Waktu Persiapan Senjata",
                description: null
            },
            reloadTimeSeconds: {
                title: "Waktu Pengisian Ulang Senjata",
                description: null
            },
            firstBulletAccuracy: {
                title: "Akurasi Peluru Pertama",
                description: null
            },
            wallPenetration: {
                title: "Penetrasi Peluru",
                description: null
            }
        },
        itIT: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nome",
                description: null,
            },
            category: {
                title: "Categoria",
                description: null,
            },
            cost: {
                title: "Costo",
                description: null
            },
            weaponStats: {
                title: "Statistiche",
                description: null
            },
            fireRate: {
                title: "Cadence di Fuoco",
                description: null
            },
            magazineSize: {
                title: "Dimensione del Caricatore",
                description: null,
            },
            equipTimeSeconds: {
                title: "Tempo di Equipaggiamento",
                description: null
            },
            reloadTimeSeconds: {
                title: "Tempo di Ricarica dell'Arma",
                description: null
            },
            firstBulletAccuracy: {
                title: "Precisione del Primo Colpo",
                description: null
            },
            wallPenetration: {
                title: "Penetrazione del Proiettile",
                description: null
            }
        },
        jaJP: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "名前",
                description: null,
            },
            category: {
                title: "カテゴリー",
                description: null,
            },
            cost: {
                title: "コスト",
                description: null
            },
            weaponStats: {
                title: "統計",
                description: null
            },
            fireRate: {
                title: "射撃速度",
                description: null
            },
            magazineSize: {
                title: "マガジンサイズ",
                description: null,
            },
            equipTimeSeconds: {
                title: "装備時間",
                description: null
            },
            reloadTimeSeconds: {
                title: "武器のリロード時間",
                description: null
            },
            firstBulletAccuracy: {
                title: "初弾の精度",
                description: null
            },
            wallPenetration: {
                title: "弾丸の貫通",
                description: null
            }
        },
        koKR: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "이름",
                description: null,
            },
            category: {
                title: "카테고리",
                description: null,
            },
            cost: {
                title: "비용",
                description: null
            },
            weaponStats: {
                title: "통계",
                description: null
            },
            fireRate: {
                title: "사격 속도",
                description: null
            },
            magazineSize: {
                title: "탄창 크기",
                description: null,
            },
            equipTimeSeconds: {
                title: "무기 장착 시간",
                description: null
            },
            reloadTimeSeconds: {
                title: "무기 재장전 시간",
                description: null
            },
            firstBulletAccuracy: {
                title: "첫 발 정확도",
                description: null
            },
            wallPenetration: {
                title: "탄환 관통력",
                description: null
            }
        },
        plPL: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nazwa",
                description: null,
            },
            category: {
                title: "Kategoria",
                description: null,
            },
            cost: {
                title: "Koszt",
                description: null
            },
            weaponStats: {
                title: "Statystyki",
                description: null
            },
            fireRate: {
                title: "Szybkość Ognia",
                description: null
            },
            magazineSize: {
                title: "Rozmiar Magazynka",
                description: null,
            },
            equipTimeSeconds: {
                title: "Czas Wyposażenia",
                description: null
            },
            reloadTimeSeconds: {
                title: "Czas Przeładowania Broni",
                description: null
            },
            firstBulletAccuracy: {
                title: "Celność Pierwszego Strzału",
                description: null
            },
            wallPenetration: {
                title: "Przenikliwość Pocisków",
                description: null
            }
        },
        ptBR: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Nome",
                description: null,
            },
            category: {
                title: "Categoria",
                description: null,
            },
            cost: {
                title: "Custo",
                description: null
            },
            weaponStats: {
                title: "Estatísticas",
                description: null
            },
            fireRate: {
                title: "Taxa de Tiro",
                description: null
            },
            magazineSize: {
                title: "Tamanho do Carregador",
                description: null,
            },
            equipTimeSeconds: {
                title: "Tempo de Equipar Arma",
                description: null
            },
            reloadTimeSeconds: {
                title: "Tempo de Recarga de Arma",
                description: null
            },
            firstBulletAccuracy: {
                title: "Precisão do Primeiro Tiro",
                description: null
            },
            wallPenetration: {
                title: "Penetração de Projétil",
                description: null
            }
        },
        ruRU: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Название",
                description: null,
            },
            category: {
                title: "Категория",
                description: null,
            },
            cost: {
                title: "Стоимость",
                description: null
            },
            weaponStats: {
                title: "Статистика",
                description: null
            },
            fireRate: {
                title: "Скорострельность",
                description: null
            },
            magazineSize: {
                title: "Размер магазина",
                description: null,
            },
            equipTimeSeconds: {
                title: "Время экипировки",
                description: null
            },
            reloadTimeSeconds: {
                title: "Время перезарядки оружия",
                description: null
            },
            firstBulletAccuracy: {
                title: "Точность первого выстрела",
                description: null
            },
            wallPenetration: {
                title: "Пробиваемость стены",
                description: null
            }
        },
        thTH: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "ชื่อ",
                description: null,
            },
            category: {
                title: "หมวดหมู่",
                description: null,
            },
            cost: {
                title: "ราคา",
                description: null
            },
            weaponStats: {
                title: "สถิติ",
                description: null
            },
            fireRate: {
                title: "อัตราการยิง",
                description: null
            },
            magazineSize: {
                title: "ขนาดนิมิต",
                description: null,
            },
            equipTimeSeconds: {
                title: "เวลาในการเตรียมอาวุธ",
                description: null
            },
            reloadTimeSeconds: {
                title: "เวลาในการเติมกระสุนอาวุธ",
                description: null
            },
            firstBulletAccuracy: {
                title: "ความแม่นยำของกระสุนแรก",
                description: null
            },
            wallPenetration: {
                title: "ความเจาะกำแพงของกระสุน",
                description: null
            }
        },
        trTR: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Ad",
                description: null,
            },
            category: {
                title: "Kategori",
                description: null,
            },
            cost: {
                title: "Maliyet",
                description: null
            },
            weaponStats: {
                title: "İstatistikler",
                description: null
            },
            fireRate: {
                title: "Ateş Hızı",
                description: null
            },
            magazineSize: {
                title: "Şarjör Boyutu",
                description: null,
            },
            equipTimeSeconds: {
                title: "Silahı Hazırlama Süresi",
                description: null
            },
            reloadTimeSeconds: {
                title: "Silahı Yeniden Doldurma Süresi",
                description: null
            },
            firstBulletAccuracy: {
                title: "İlk Mermi Hassasiyeti",
                description: null
            },
            wallPenetration: {
                title: "Duvar Penetrasyonu",
                description: null
            }
        },
        viVN: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "Tên",
                description: null,
            },
            category: {
                title: "Danh Mục",
                description: null,
            },
            cost: {
                title: "Giá",
                description: null
            },
            weaponStats: {
                title: "Thống Kê",
                description: null
            },
            fireRate: {
                title: "Tốc Độ Bắn",
                description: null
            },
            magazineSize: {
                title: "Kích Thước Ảnh Đạn",
                description: null,
            },
            equipTimeSeconds: {
                title: "Thời Gian Trang Bị Vũ Khí",
                description: null
            },
            reloadTimeSeconds: {
                title: "Thời Gian Nạp Lại Vũ Khí",
                description: null
            },
            firstBulletAccuracy: {
                title: "Độ Chính Xác Đạn Đầu Tiên",
                description: null
            },
            wallPenetration: {
                title: "Xâm Nhập Tường",
                description: null
            }
        },
        zhCN: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "名称",
                description: null,
            },
            category: {
                title: "类别",
                description: null,
            },
            cost: {
                title: "费用",
                description: null
            },
            weaponStats: {
                title: "统计数据",
                description: null
            },
            fireRate: {
                title: "射速",
                description: null
            },
            magazineSize: {
                title: "弹夹容量",
                description: null,
            },
            equipTimeSeconds: {
                title: "武器装备时间",
                description: null
            },
            reloadTimeSeconds: {
                title: "武器重新装填时间",
                description: null
            },
            firstBulletAccuracy: {
                title: "首发精度",
                description: null
            },
            wallPenetration: {
                title: "子弹穿透",
                description: null
            }
        },
        zhTW: {
            columnatribute: {
                title: "Atributo",
                description: null
            },
            columnvalue: {
                title: "Valor",
                description: null
            },
            columnunit: {
                title: "Unidad",
                description: null
            },
            titleSkin: {
                title: "Aspectos",
                description: null
            },
            displayName: {
                title: "名稱",
                description: null,
            },
            category: {
                title: "類別",
                description: null,
            },
            cost: {
                title: "成本",
                description: null
            },
            weaponStats: {
                title: "統計資料",
                description: null
            },
            fireRate: {
                title: "射速",
                description: null
            },
            magazineSize: {
                title: "彈夾容量",
                description: null,
            },
            equipTimeSeconds: {
                title: "武器裝備時間",
                description: null
            },
            reloadTimeSeconds: {
                title: "武器重新裝填時間",
                description: null
            },
            firstBulletAccuracy: {
                title: "首發精度",
                description: null
            },
            wallPenetration: {
                title: "子彈穿透",
                description: null
            }
        },
        
    }
};